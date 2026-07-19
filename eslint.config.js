const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const globals = require("globals");
const importPlugin = require("eslint-plugin-import");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const prettier = require("eslint-config-prettier");

module.exports = [
  {
    ignores: [
      "eslint.config.js",
      "node_modules/**",
      "playwright-report/**",
      "allure-results/**",
      "allure-report/**",
      "test-results/**",
      "dist/**",
      "coverage/**",
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.node,
      },
    },

    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      /* Import rules */
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      /* TypeScript */
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-unused-expressions": "off",

      /* Playwright-friendly */
      "no-empty-pattern": "off",
      "no-console": "off",
      "no-debugger": "warn",
    },
  },
];
