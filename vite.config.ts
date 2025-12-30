import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    // ElementPlus 按需导入
    AutoImport({
      // api
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [ElementPlusResolver()],
      eslintrc: { enabled: false }, // 给eslint生产配置 只运行一次
    }),
    Components({
      // 解析组件
      resolvers: [ElementPlusResolver()],
      // 所有的组件自动加载
      dirs: ["src/components", "src/layout/components"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
