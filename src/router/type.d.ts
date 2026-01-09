import "vue-router";

// 模块添加额外类型
declare module "vue-router" {
  interface RouteMeta {
    icon?: string;
    title?: string;
    hidden?: boolean;
    alwaysShow?: boolean;
    breadcrumb?: boolean;
  }
}
