<template>
  <!-- 我们需要将路由表中的路径进行添加 index -->
  <template v-if="!item.meta?.hidden">
    <sidebar-item-link
      v-if="filteredChildren.length <= 1 && !item.meta?.alwaysShow"
      :to="resolvePath(singleChildRoute?.path ?? '')"
    >
      <el-menu-item :index="resolvePath(singleChildRoute?.path ?? '')">
        <el-icon v-if="iconName">
          <svg-icon :icon-name="iconName" />
        </el-icon>
        <template #title>{{ singleChildRoute?.meta?.title }}</template>
      </el-menu-item>
    </sidebar-item-link>
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon v-if="iconName">
          <svg-icon :icon-name="iconName" />
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <sidebar-item
        v-for="child of filteredChildren"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      ></sidebar-item>
    </el-sub-menu>
  </template>
</template>
<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router";
import path from "path-browserify";
import { isExternal } from "@/utils/validate";

const { item, basePath } = defineProps<{ item: RouteRecordRaw; basePath: string }>();

// 如果只有一个子项
const filteredChildren = computed(() =>
  (item.children || []).filter((child) => !child.meta?.hidden)
);

// 渲染路由
const singleChildRoute = computed(() =>
  filteredChildren.value.length === 1
    ? filteredChildren.value[0]
    : {
        ...item,
        path: "",
        // 此处我们将自己的path置为“” 防止重复拼接
      }
);
// 渲染图标
const iconName = computed(() => singleChildRoute.value?.meta?.icon);

// 解析路径
const resolvePath = (childPath: string) => {
  if (isExternal(childPath)) {
    return childPath;
  }
  return path.join(basePath, childPath);
};
</script>
