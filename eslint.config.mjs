import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

// shortcut: ESLint 9 matches the Next plugins' peer ranges; upgrade when they support ESLint 10.

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", ".playwright-mcp/**"]),
]);
