<template>
  <el-menu-item v-if="filteredChildren.length <= 1" :index="singleChildRoute?.path">
    <el-icon v-if="iconName">
      <svg-icon :icon-name="iconName" />
    </el-icon>
    <template #title>{{ singleChildRoute?.meta?.title }}</template>
  </el-menu-item>
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <el-icon v-if="iconName">
        <svg-icon :icon-name="iconName" />
      </el-icon>
      <span>{{ item.meta?.title }}</span>
    </template>
    <sidebar-item v-for="child of filteredChildren" :key="child.path" :item="child"></sidebar-item>
  </el-sub-menu>
</template>
<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router";

const { item } = defineProps<{ item: RouteRecordRaw }>();

// 如果只有一个子项
const filteredChildren = computed(() => item.children || []);

// 渲染路由
const singleChildRoute = computed(() =>
  filteredChildren.value.length === 1 ? filteredChildren.value[0] : item
);
// 渲染图标
const iconName = computed(() => singleChildRoute.value?.meta?.icon);
console.log(iconName);
</script>
