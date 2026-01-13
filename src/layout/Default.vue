<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <!-- 顶部导航栏 -->
        <navbar @showSetting="openSetting"></navbar>
        <tags-view v-if="isShowTagsView"></tags-view>
      </div>
      <div class="app-main"><app-main /></div>
    </div>
    <!-- 先封装一个抽屉组件 -->
    <right-panel v-model="setting" title="设置">
      <!-- 设置功能 -->
      <Settings></Settings>
    </right-panel>
  </div>
</template>
<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";
import varaibles from "@/style/variables.module.scss";

const setting = ref(false);
const openSetting = () => {
  setting.value = true;
};
const settingsStore = useSettingStore();
const isShowTagsView = computed(() => settingsStore.settings.tagsView);

const outerHeight = computed(() => {
  return (
    (isShowTagsView.value
      ? parseInt(varaibles.navBarHeight) + parseInt(varaibles.tagsViewHeight)
      : parseInt(varaibles.navBarHeight)) + "px"
  );
});
</script>
<style lang="scss" scoped>
.app-wrapper {
  @apply flex w-full h-full;

  .app-main {
    @apply overflow-hidden pos-relative;
    min-height: calc(100vh - v-bind(outerHeight));
  }
  .sidebar-container {
    // 跨组件设置样式
    @apply bg-[var(--menu-bg)];
    :deep(.sidebar-container-menu:not(.el-menu--collapse)) {
      @apply w-[var(--sidebar-width)];
    }
  }
  .main-container {
    @apply flex flex-col flex-1 overflow-hidden;
  }
}
</style>
