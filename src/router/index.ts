import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
    // redirect: "/about",
    // children: [
    //   {
    //     path: "about",
    //     name: "About",
    //     component: () => import("../views/About.vue"),
    //   },
    // ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
