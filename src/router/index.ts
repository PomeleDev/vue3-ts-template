import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Layout from "@/layout/Default.vue";

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/overview",
    children: [
      {
        path: "overview",
        name: "overview",
        component: () => import("@/views/Overview/index.vue"),
        meta: {
          icon: "ant-design:bank-outlined",
          title: "仪表盘",
        },
      },
    ],
  },
];

const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/documentation",
    component: Layout,
    redirect: "/documentation",
    children: [
      {
        path: "index",
        name: "Documentation",
        component: () => import("@/views/Documentation/index.vue"),
        meta: {
          icon: "ant-design:database-filled",
          title: "文档",
        },
      },
    ],
  },
  {
    path: "/guide",
    component: Layout,
    redirect: "/guide/index",
    children: [
      {
        path: "index",
        name: "Guide",
        component: () => import("@/views/System/user.vue"),
        meta: {
          icon: "ant-design:car-twotone",
          title: "guite",
        },
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/system/menu",
    meta: {
      icon: "ant-design:unlock-filled",
      title: "system",
    },
    children: [
      {
        path: "menu",
        name: "menu",
        component: () => import("@/views/System/menu.vue"),
        meta: {
          icon: "ant-design:unlock-filled",
          title: "menu",
        },
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/views/System/user.vue"),
        meta: {
          icon: "ant-design:unlock-filled",
          title: "user",
        },
      },
      {
        path: "role",
        name: "role",
        component: () => import("@/views/System/role.vue"),
        meta: {
          icon: "ant-design:unlock-filled",
          title: "role",
        },
      },
    ],
  },
];

export const routes: RouteRecordRaw[] = [...constantRoutes, ...asyncRoutes];

export default createRouter({
  history: createWebHistory(), // 路由模式
  routes, // 路由表
});
