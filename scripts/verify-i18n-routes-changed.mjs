#!/usr/bin/env node

/**
 * Changed-routes i18n test wrapper
 *
 * Usage:
 *   node scripts/verify-i18n-routes-changed.mjs
 *
 * Env vars:
 *   BASE_REF            Optional git base ref (default: origin/main)
 *   CHANGED_ROUTE_REGEX Optional custom matcher for extracting route-like paths
 *                       default: /^app\/(.+)\/page\.(tsx|ts|jsx|js)$/
 *
 * Behavior:
 *   - Detect changed files via git diff
 *   - Extract changed app routes from app/** /page.* (glob shown with space to avoid comment close)
 *   - Convert route folders into URL paths
 *   - Run full i18n route verifier with only those changed routes as args
 *   - If no route pages changed, exits 0 with a clear message
 */

import { spawnSync } from "node:child_process";
import process from "node:process";
import path from "node:path";

const DEFAULT_BASE_REF = process.env.BASE_REF || "origin/main";
const ROUTE_REGEX = process.env.CHANGED_ROUTE_REGEX
  ? new RegExp(process.env.CHANGED_ROUTE_REGEX)
  : /^app\/(.+)\/page\.(tsx|ts|jsx|js)$/;

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: "pipe",
    encoding: "utf8",
    ...options,
  });
  return result;
}

function ensureGitRepo() {
  const check = run("git", ["rev-parse", "--is-inside-work-tree"]);
  if (check.status !== 0 || !String(check.stdout).trim().includes("true")) {
    console.error("❌ Not inside a git repository.");
    process.exit(1);
  }
}

function listChangedFiles(baseRef) {
  // Try merge-base style diff first (best for CI PR contexts)
  const diffArgsPreferred = ["diff", "--name-only", `${baseRef}...HEAD`];
  let result = run("git", diffArgsPreferred);

  // Fallback to simple range if merge-base triple-dot fails
  if (result.status !== 0) {
    const fallbackArgs = ["diff", "--name-only", baseRef, "HEAD"];
    result = run("git", fallbackArgs);
  }

  if (result.status !== 0) {
    console.error("❌ Unable to compute changed files from git diff.");
    if (result.stderr) console.error(result.stderr.trim());
    process.exit(1);
  }

  return String(result.stdout)
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function normalizeToPosix(p) {
  return p.split(path.sep).join("/");
}

function routeFromFile(filePath) {
  const normalized = normalizeToPosix(filePath);
  const match = normalized.match(ROUTE_REGEX);
  if (!match) return null;

  const routeFolder = match[1]; // e.g. "es/add-watermark" or "(group)/tool"
  const segments = routeFolder
    .split("/")
    .filter(Boolean)
    .filter((seg) => !seg.startsWith("(") && !seg.endsWith(")")) // remove route groups
    .filter((seg) => seg !== "index");

  // Skip dynamic routes for static smoke checks
  if (segments.some((seg) => seg.startsWith("[") && seg.endsWith("]"))) {
    return null;
  }

  const routePath = `/${segments.join("/")}`.replace(/\/+/g, "/");
  return routePath === "/" ? "/" : routePath.replace(/\/$/, "");
}

function uniqSorted(arr) {
  return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
}

function runVerifierWithRoutes(routes) {
  const args = ["scripts/verify-i18n-routes.mjs", ...routes];
  const child = spawnSync("node", args, {
    stdio: "inherit",
    env: process.env,
  });

  if (child.error) {
    console.error("❌ Failed to start i18n verifier:", child.error.message);
    process.exit(1);
  }

  process.exit(child.status != null ? child.status : 1);
}

(function main() {
  ensureGitRepo();

  const changedFiles = listChangedFiles(DEFAULT_BASE_REF);
  const changedRoutes = uniqSorted(
    changedFiles.map(routeFromFile).filter(Boolean),
  );

  if (changedRoutes.length === 0) {
    console.log(
      "ℹ️ No changed app route pages detected. Skipping changed-route i18n smoke.",
    );
    process.exit(0);
  }

  console.log(`🔎 Changed routes detected (${changedRoutes.length}):`);
  for (const r of changedRoutes) console.log(` - ${r}`);

  console.log("▶️ Running i18n route verifier for changed routes...");
  runVerifierWithRoutes(changedRoutes);
})();
