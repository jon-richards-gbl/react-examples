import react from "@vitejs/plugin-react";
import * as path from "path";
import { configDefaults, defineConfig } from "vitest/config";

// @ts-expect-error - tsconfig cant read itself?
import tsConfig from "./tsconfig.json";

const tsPathsToAliases = (paths: Record<string, [string]>) =>
  Object.fromEntries(
    Object.entries(paths).map(([key, value]) => [
      key.replace("/*", ""),
      path.resolve(value[0].replace("/*", "")),
    ])
  );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: tsPathsToAliases(tsConfig.compilerOptions.paths),
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.js",
    coverage: {
      provider: "c8",

      // collect coverage for all except the files specified
      all: true,
      exclude: [
        ...configDefaults.coverage.exclude,
        "src/assets/**",
        "src/main/*.tsx",
        "src/**/types/*.ts",
      ],
    },
  },
});
