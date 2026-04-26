#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const APP_DIR = path.resolve(process.cwd(), "app");
const BASE_URL = (process.env.BASE_URL || "http://127.0.0.1:3000").replace(
  /\/+$/,
  "",
);
const targetArgs = process.argv.slice(2).map(normalizeRoute);

const LOCALES = ["es", "pt", "fr", "de", "it"];
const IGNORED_SEGMENTS = new Set(["api"]);
const DYNAMIC_ROUTE_RE = /^\[.*\]$/;

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (IGNORED_SEGMENTS.has(entry.name)) continue;
      out.push(...walk(full));
      continue;
    }

    if (entry.isFile() && entry.name === "page.tsx") {
      out.push(full);
    }
  }
  return out;
}

function toWebRoute(pageFile) {
  const relative = path.relative(APP_DIR, path.dirname(pageFile));
  const parts = relative.split(path.sep).filter(Boolean);

  const clean = parts.filter((p) => !DYNAMIC_ROUTE_RE.test(p));
  if (clean.length === 0) return "/";
  return `/${clean.join("/")}`;
}

function isLocalePrefixed(route) {
  const first = route.split("/").filter(Boolean)[0];
  return LOCALES.includes(first);
}

function isStaticAssetRoute(route) {
  return (
    route.startsWith("/_next/") ||
    route.startsWith("/api/") ||
    route.endsWith(".xml") ||
    route.endsWith(".txt") ||
    route.endsWith(".json") ||
    route.endsWith(".ico")
  );
}

function normalizeRoute(route) {
  if (!route.startsWith("/")) route = `/${route}`;
  return route.replace(/\/+$/, "") || "/";
}

function buildCandidateRoutes(routes) {
  const set = new Set();

  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];
    const r = normalizeRoute(route);

    if (isStaticAssetRoute(r)) continue;

    if (r === "/") {
      set.add("/");
      for (let j = 0; j < LOCALES.length; j += 1) {
        const locale = LOCALES[j];
        set.add(`/${locale}`);
      }
      continue;
    }

    if (isLocalePrefixed(r)) {
      set.add(r);
      continue;
    }

    set.add(r);

    const tail = r.slice(1); // remove leading slash
    for (let j = 0; j < LOCALES.length; j += 1) {
      const locale = LOCALES[j];
      set.add(`/${locale}/${tail}`);
    }
  }

  return [...set].sort((a, b) => a.localeCompare(b));
}

function toStaticExportCandidates(route) {
  const r = normalizeRoute(route);

  if (r === "/") {
    return ["/", "/index.html"];
  }

  return [r, `${r}.html`, `${r}/index.html`];
}

async function checkRoute(route) {
  const candidates = toStaticExportCandidates(route);
  let lastResult = null;

  for (let i = 0; i < candidates.length; i += 1) {
    const candidate = candidates[i];
    const url = `${BASE_URL}${candidate}`;
    const res = await fetch(url, { redirect: "manual" });

    if (res.status >= 200 && res.status < 400) {
      return { ok: true, status: res.status, url, matchedPath: candidate };
    }

    lastResult = { ok: false, status: res.status, url, matchedPath: candidate };
  }

  return lastResult || { ok: false, status: "ERR", url: `${BASE_URL}${route}` };
}

function printSummary(total, failed) {
  console.log("");
  console.log(`Checked ${total} route(s) against ${BASE_URL}`);
  if (failed.length === 0) {
    console.log("✅ i18n route smoke test passed");
    return;
  }

  console.log(`❌ ${failed.length} route(s) failed:`);
  for (let i = 0; i < failed.length; i += 1) {
    const item = failed[i];
    console.log(`  - [${item.status}] ${item.url}`);
  }
}

async function run() {
  if (!fs.existsSync(APP_DIR)) {
    console.error(`app directory not found: ${APP_DIR}`);
    process.exit(1);
  }

  const pageFiles = walk(APP_DIR);
  if (pageFiles.length === 0) {
    console.error("No app/**/page.tsx files found.");
    process.exit(1);
  }

  const routes = pageFiles.map(toWebRoute);
  let candidates = buildCandidateRoutes(routes);

  if (targetArgs.length > 0) {
    const requested = new Set(targetArgs);
    candidates = candidates.filter((r) => requested.has(r));

    const discovered = new Set(candidates);
    const missing = targetArgs.filter((r) => !discovered.has(r));

    if (missing.length > 0) {
      console.error(
        `Target route(s) not discovered from app routes: ${missing.join(", ")}`,
      );
      process.exit(1);
    }
  }

  const failed = [];
  for (let i = 0; i < candidates.length; i += 1) {
    const route = candidates[i];
    try {
      const result = await checkRoute(route);
      if (!result.ok) failed.push(result);
      else
        console.log(`OK  [${result.status}] ${route} -> ${result.matchedPath}`);
    } catch (err) {
      failed.push({
        ok: false,
        status: "ERR",
        url: `${BASE_URL}${route}`,
        error: String((err && err.message) || err),
      });
      console.log(`ERR [fetch] ${route}`);
    }
  }

  printSummary(candidates.length, failed);

  if (failed.length > 0) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error("Unexpected failure:", err);
  process.exit(1);
});
