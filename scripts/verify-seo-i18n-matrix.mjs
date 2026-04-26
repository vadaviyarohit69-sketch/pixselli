#!/usr/bin/env node

/**
 * SEO + I18N matrix test wrapper.
 *
 * This wrapper is intentionally lightweight:
 * - It delegates to verify-i18n-routes.mjs as the primary matrix check.
 * - It keeps compatibility with existing npm script wiring.
 *
 * Usage:
 *   node scripts/verify-seo-i18n-matrix.mjs
 *   node scripts/verify-seo-i18n-matrix.mjs /about
 */

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const root = process.cwd();
const i18nVerifier = resolve(root, "scripts", "verify-i18n-routes.mjs");

if (!existsSync(i18nVerifier)) {
  console.error("❌ Missing dependency script: scripts/verify-i18n-routes.mjs");
  console.error(
    "Please add/restore verify-i18n-routes.mjs so the SEO i18n matrix wrapper can run."
  );
  process.exit(1);
}

const args = process.argv.slice(2);
const env = { ...process.env };

const child = spawn(process.execPath, [i18nVerifier, ...args], {
  stdio: "inherit",
  env,
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`❌ verify-i18n-routes terminated by signal: ${signal}`);
    process.exit(1);
  }
  process.exit(code ?? 1);
});

child.on("error", (err) => {
  console.error("❌ Failed to run verify-i18n-routes:", err);
  process.exit(1);
});
