import js from "@eslint/js"; // 校验js规范(推荐)
import globals from "globals";
import tseslint from "typescript-eslint"; // 推荐的ts规范
import pluginVue from "eslint-plugin-vue"; // 推荐的vue规范
import { defineConfig } from "eslint/config";
import prettierRecommended from "eslint-plugin-prettier/recommended"; // 格式化

// 1
// import autoImport from "./.eslintrc-auto-import.json" with { type: "json" };

// 2
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const autoImport = require("./.eslintrc-auto-import.json");

// 3.fs.readFile

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...autoImport.globals,
      },
    },
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"], // 校验vue中的ts规范
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    // 那些文件需要忽略校验
    ignores: [".css", "*.d.ts"],
  },
  {
    // 自定义规则
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  prettierRecommended, // 覆盖eslint的规范
]);
