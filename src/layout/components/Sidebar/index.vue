<template>
  <el-menu
    class="sidebar-container-menu"
    router
    :default-active="defaultActive"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :collapse="sidebar.opened"
  >
    <el-menu-item :index="defaultActive">
      <el-icon><Setting /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
import variables from "@/style/variables.module.scss";

// const collapse = ref(false);
const route = useRoute();

const { sidebar } = useAppStore();

const defaultActive = computed(() => {
  return route.path;
});
</script>

<style scoped></style>
