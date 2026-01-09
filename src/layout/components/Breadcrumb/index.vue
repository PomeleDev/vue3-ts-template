<template>
  <el-breadcrumb separator="/" leading-50px text-lg ml-30px inline-block>
    <!-- a.path可能是一个路由参数导航 /test/index/:id -->
    <el-breadcrumb-item v-for="(route, index) in list" :key="route.path">
      <span v-if="list.length - 1 === index">{{ route.meta?.title }}</span>
      <a v-else @click="handleLink(route)">{{ route.meta?.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<!-- overview -->
<script lang="ts" setup>
import router from "@/router";
import type { RouteLocationMatched } from "vue-router";
import { compile } from "path-to-regexp";
type PartialRouteLocationMatched = Partial<RouteLocationMatched>;
const route = useRoute();
const list = ref<PartialRouteLocationMatched[]>([]);
const getBreadCrumb = () => {
  let matched = route.matched.filter((match) => match.meta.title) as PartialRouteLocationMatched[];

  if (matched.length === 0 || matched[0]?.path !== "/overview") {
    //  当前访问的不是首页，增加匹配项目
    matched = [
      {
        path: "/overview",
        meta: {
          title: "overview",
        },
      },
      ...matched,
    ];
  }
  list.value = matched.filter((match) => match.meta?.breadcrumb !== false);
};
watch(() => route.path, getBreadCrumb, { immediate: true });
// 我们需要根据面包屑导航 + 当前访问的路径  -》 跳转路径
function compilePath(path: string) {
  const params = route.params;
  const resultPath = compile(path)(params);
  return resultPath;
}
function handleLink(route: PartialRouteLocationMatched) {
  const { path, redirect } = route;
  if (redirect) {
    return router.push(redirect as string);
  }
  router.push(compilePath(path!));
}
</script>
