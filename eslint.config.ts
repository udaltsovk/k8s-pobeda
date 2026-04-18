// @ts-check
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import type { Linter } from "eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

const commonRules: Linter.RulesRecord = {
  eqeqeq: "error",
  curly: "error",
  "no-console": "off",
  "no-eval": "error",
  "no-implied-eval": "error",
  "no-new-wrappers": "error",
  "no-useless-concat": "error",
  "no-var": "error",
  "prefer-arrow-callback": "error",
  "prefer-const": "error",
  "sort-imports": [
    "error",
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      allowSeparatedGroups: true,
    },
  ],
};

const config = defineConfig([
  globalIgnores([".astro/**", "dist/**", "node_modules/**"]),
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [js.configs.recommended, prettierRecommended],
    languageOptions: {
      globals: globals.node,
    },
    rules: commonRules,
  },
  {
    files: ["**/*.{ts,mts,cts}"],
    extends: [tseslint.configs.recommended, tseslint.configs.stylistic, prettierRecommended],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      ...commonRules,
      "@typescript-eslint/array-type": ["warn"],
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/consistent-type-assertions": "warn",
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "no-public",
        },
      ],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
        },
      ],
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-shadow": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-shadow": "error",
    },
  },
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.astro/*.js", "**/*.astro/*.ts"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    files: ["**/*.astro"],
    extends: [prettierRecommended],
    rules: {},
  },
]);

export default config;
