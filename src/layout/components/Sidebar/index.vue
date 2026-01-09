<template>
  <el-menu
    border-none
    class="sidebar-container-menu"
    :default-active="defaultActive"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :collapse="sidebar.opened"
  >
    <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
    <!-- 增加父路径，用于el-menu-item渲染的时候拼接 -->
  </el-menu>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
import variables from "@/style/variables.module.scss";
import { routes } from "@/router";

// const collapse = ref(false);
const route = useRoute();

const { sidebar } = useAppStore();

const defaultActive = computed(() => {
  // .....
  return route.path;
});
</script>

<style scoped></style>
