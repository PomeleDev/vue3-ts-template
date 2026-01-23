<template>
  <div>
    <logo v-if="sidebarLogo" :collapse="sidebar.opened"></logo>

    <el-menu
      border-none
      class="sidebar-container-menu"
      :default-active="defaultActive"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="theme"
      :collapse="sidebar.opened"
    >
      <sidebar-item v-for="route in menuRoutes" :key="route.path" :item="route" />
      <!-- 增加父路径，用于el-menu-item渲染的时候拼接 -->
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/stores/app";
import variables from "@/style/variables.module.scss";
import { useSettingStore } from "@/stores/settings";
import { useMenuStore } from "@/stores/menu";

const meuStore = useMenuStore();

const menuRoutes = computed(() => meuStore.state.authMenuTreeData);

// const collapse = ref(false);
const route = useRoute();

const { sidebar } = useAppStore();

const defaultActive = computed(() => {
  // .....
  return route.path;
});
const settingsStore = useSettingStore();
const theme = computed(() => settingsStore.settings.theme);

const sidebarLogo = computed(() => settingsStore.settings.sidebarLogo);
</script>

<style scoped></style>
