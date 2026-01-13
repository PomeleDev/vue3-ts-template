// 做鉴权的， 获取用户权限的

import router from "@/router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "./utils/auth";

NProgress.configure({ showSpinner: false });

//  配置哪些页面不需要做校验

const whiteList = ["/login"];
router.beforeEach(async (to) => {
  NProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    //  用token换用户信息
    if (to.path === "/login") {
      NProgress.done();
      return {
        path: "/",
        replace: true,
      };
    }
    NProgress.done();
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
