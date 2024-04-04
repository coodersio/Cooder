import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptEslintParser from "@typescript-eslint/parser";
import typeScriptPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import storybookPlugin from "eslint-plugin-storybook";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactRecommended,
  prettierRecommended,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    ignores: [
      "**/**/dist",
      "**/**/coverage",
      "**/**/public",
      "pnpm-lock.yaml",
      "pnpm-workspace.yaml",
      "eslint.config.js",
      "**/**/.next",
    ],
  },
  {
    files: ["**/**.{ts,tsx,js,jsx}"],
    plugins: { typeScriptPlugin, reactPlugin },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: [
      "apps/vite-demo/**/**.{ts,tsx,js,jsx}",
      "apps/storybook/**/**.{ts,tsx,js,jsx}",
    ],
    plugins: {
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      parser: typescriptEslintParser,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["apps/storybook/**/**.{ts,tsx,js,jsx}"],
    plugins: { storybookPlugin },
  },
  {
    files: [
      "apps/nextjs-demo/**/**.{ts,tsx,js,jsx}",
      "apps/vite-demo/**/**.{ts,tsx,js,jsx}",
      "apps/storybook/**/**.{ts,tsx,js,jsx}",
      "packages/cooder-react-components/**/**.{ts,tsx,js,jsx}",
    ],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
