// 做鉴权的， 获取用户权限的

import router from "@/router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "./utils/auth";
import { useUserStore } from "./stores/user";

import { usePermissionStore } from "./stores/permission";

NProgress.configure({ showSpinner: false });

//  配置哪些页面不需要做校验

const whiteList = ["/login"];
router.beforeEach(async (to) => {
  NProgress.start();
  const hasToken = getToken();
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  if (hasToken) {
    //  用token换用户信息
    if (to.path === "/login") {
      NProgress.done();
      return {
        path: "/",
        replace: true,
      };
    } else {
      // 用token 换取 用户信息， 也有可能token是伪造的
      try {
        const hasRoles = userStore.state.roles.length > 0;
        if (hasRoles) {
          NProgress.done();
          return true;
        }
        await userStore.getUserInfo();
        // const roles = userStore.state.roles // 稍后用角色来生成菜单树
        const routes = await permissionStore.generateRoutes();
        routes.forEach(router.addRoute); // 内部添加到映射表中
        return router.push(to.path);
      } catch (e) {
        console.log(e);
        userStore.logout();
        NProgress.done();
        return "/login?redirect=" + to.path;
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      NProgress.done();
      return true;
    }
    return {
      path: "/login",
      query: {
        redirect: to.path,
        ...to.query,
      },
      // 给与跳转后的重定向参数，还有其他参数
    };
  }
});
