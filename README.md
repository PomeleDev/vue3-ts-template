# 🚀 Vue 3 + TypeScript + Vite 企业级模板

一个功能完整的 Vue 3 + TypeScript 前端项目模板，集成了现代化的开发工具和最佳实践。

## ✨ 核心特性

### 🎨 UI & 样式
- **UnoCSS**: 原子化 CSS 引擎，支持属性化写法
- **Element Plus**: 企业级 Vue 组件库，按需自动导入
- **Sass**: 强大的 CSS 预处理器
- **Normalize.css**: 统一的浏览器样式重置

### 🔧 开发体验
- **TypeScript**: 完整的类型支持
- **ESLint + Prettier**: 代码规范和自动格式化
- **Husky + Commitlint**: Git 提交规范检查
- **自动导入**: API 和组件自动导入，提升开发效率

### 🏗️ 架构设计
- **Pinia**: 现代化的状态管理
- **Vue Router**: 基于文件的路由系统
- **插件系统**: 可扩展的插件架构
- **布局系统**: 灵活的页面布局

## 📦 技术栈

### 核心框架
- **Vue 3.5** - 渐进式 JavaScript 框架
- **TypeScript 5.9** - 类型安全的 JavaScript 超集
- **Vite 7.2** - 下一代前端构建工具

### UI & 样式
- **UnoCSS 66.5** - 原子化 CSS 引擎
- **Element Plus 2.13** - Vue 3 组件库
- **Sass 1.97** - CSS 预处理器

### 状态 & 路由
- **Pinia 3.0** - Vue 3 官方状态管理
- **Vue Router 4.6** - Vue 3 官方路由

### 开发工具
- **ESLint 9.39** - JavaScript/TypeScript 代码检查
- **Prettier 3.7** - 代码格式化
- **Husky 9.1** - Git 钩子
- **Commitlint** - 提交信息规范

### 自动化工具
- **unplugin-auto-import** - API 自动导入
- **unplugin-vue-components** - 组件自动导入
- **lint-staged** - 提交前代码检查

## 🗂️ 项目结构

```
vue3-ts-template/
├── 📁 public/                 # 静态资源
├── 📁 src/
│   ├── 📁 assets/            # 项目资源文件
│   ├── 📁 components/        # 全局组件
│   ├── 📁 layout/           # 布局组件
│   ├── 📁 plugins/          # 插件系统
│   │   ├── 📄 index.ts      # 插件入口
│   │   └── 📄 element.ts    # Element Plus 插件
│   ├── 📁 router/           # 路由配置
│   ├── 📁 stores/           # Pinia 状态管理
│   ├── 📁 style/            # 全局样式
│   │   ├── 📄 index.scss    # 主样式文件
│   │   └── 📄 variables.module.scss # 样式变量
│   ├── 📁 views/            # 页面组件
│   ├── 📄 App.vue           # 根组件
│   └── 📄 main.ts           # 应用入口
├── 📁 .husky/               # Git 钩子配置
├── 📄 .eslintrc-auto-import.json # 自动导入配置
├── 📄 auto-imports.d.ts     # 自动导入类型定义
├── 📄 components.d.ts       # 组件类型定义
├── 📄 uno.config.ts         # UnoCSS 配置
├── 📄 vite.config.ts        # Vite 配置
├── 📄 tsconfig.json         # TypeScript 配置
├── 📄 eslint.config.ts      # ESLint 配置
├── 📄 prettier.config.js    # Prettier 配置
└── 📄 package.json          # 项目依赖
```

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0 (推荐)

### 安装依赖

```bash
# 克隆项目
git clone <repository-url>
cd vue3-ts-template

# 安装依赖 (推荐使用 pnpm)
pnpm install
```

### 开发运行

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

### 代码规范

```bash
# 代码检查
pnpm lint

# 自动修复代码问题
pnpm lint:fix
```

## 📖 使用指南

### 🎨 UnoCSS 样式

项目使用 UnoCSS，支持多种写法：

```vue
<template>
  <!-- 传统类名 -->
  <div class="text-red bg-blue-100 p-4 rounded">
    传统写法
  </div>

  <!-- 属性化写法 -->
  <div text-red bg="blue-100" p="4" rounded>
    属性化写法
  </div>
</template>

<style lang="scss" scoped>
/* @apply 指令 */
.custom-class {
  @apply text-green bg-gray-100 p-6 rounded-lg shadow-md;
}
</style>
```

### 🔄 状态管理

使用 Pinia 进行状态管理：

```typescript
// stores/counter.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  return { count, increment }
})
```

```vue
<script setup>
// 自动导入，无需手动导入
const counterStore = useCounterStore()
</script>
```

### 🛣️ 路由系统

基于文件的路由系统：

```typescript
// router/index.ts
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/overview',
    children: [
      {
        path: 'overview',
        component: () => import('@/views/Overview/index.vue')
      }
    ]
  }
]
```

### 🔌 插件系统

可扩展的插件架构：

```typescript
// plugins/element.ts
import type { App } from "vue";
import { ElMessage } from "element-plus";

export default (app: App) => {
  // 注册全局 API
  app.config.globalProperties.$message = ElMessage;
};

// plugins/index.ts
import elementPlugin from "./element";

export default (app: App) => {
  app.use(elementPlugin);
};
```

## 🔧 配置说明

### UnoCSS 配置

```typescript
// uno.config.ts
import { defineConfig, uno, presetAttributify, transformerDirectives } from "unocss";

export default defineConfig({
  presets: [
    uno,                    // 核心 preset
    presetAttributify(),    // 属性化写法支持
  ],
  transformers: [
    transformerDirectives(), // @apply 支持
  ],
});
```

### Vite 配置

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(), // UnoCSS 插件
    // 其他插件...
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

## 📋 开发规范

### Git 提交规范

项目使用 Conventional Commits 规范：

```bash
# 功能提交
git commit -m "feat: 添加用户登录功能"

# 修复提交
git commit -m "fix: 修复按钮点击事件"

# 文档提交
git commit -m "docs: 更新 README 文档"
```

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint + Prettier 配置
- 使用 Vue 3 Composition API
- 组件名使用 PascalCase 或 kebab-case

### 文件命名

- 组件文件：`PascalCase.vue` 或 `kebab-case.vue`
- 工具文件：`camelCase.ts`
- 类型文件：`*.d.ts`

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 创建 Pull Request

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙋‍♂️ 常见问题

### Q: 如何添加新的页面？

A: 在 `src/views/` 目录下创建新文件夹，然后在 `src/router/index.ts` 中添加路由配置。

### Q: 如何添加全局样式？

A: 在 `src/style/index.scss` 中添加全局样式，或在组件的 `<style>` 中使用 `global` 属性。

### Q: 如何配置环境变量？

A: 在项目根目录创建 `.env` 文件，Vite 会自动加载以 `VITE_` 开头的变量。

## 🔗 相关链接

- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [UnoCSS 文档](https://unocss.dev/)
- [Element Plus 文档](https://element-plus.org/)
- [TypeScript 文档](https://www.typescriptlang.org/)

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！
