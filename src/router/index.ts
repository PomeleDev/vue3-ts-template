import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Layout from "@/layout/default.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/overview",
    children: [
      { path: "overview", component: () => import("@/views/Overview/index.vue") },
      { path: "123", component: () => import("@/views/Overview/index.vue") },
    ],
  },
];

export default createRouter({
  history: createWebHistory(), // 路由模式
  routes, // 路由表
});
