# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Getting Started

cd backstage-demo

安装,
```bash
$ npm
```

依赖,
```bash
$ npm install
```

启动,
```bash
$ npm run dev
```

## 文件目录
- vite.config.ts（配置文件）
- public (静态资源)
- src 
    - main.ts (入口文件)
    - assets (资源文件)
    - components (公共组件)
      - common (复用组件)
      - local (项目组件)
    - layout (页面公共内容布局)
    - router (路由文件)
    - services (网络请求)
      - index.ts
      - request (封装网络请求地址)
      - modules (请求模块)
    - store (状态管理)
    - utils (工具函数文件)
    - views (路由页面)
