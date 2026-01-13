<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <!-- 顶部导航栏 -->
        <navbar />
        <tags-view />
      </div>
      <app-main />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-wrapper {
  @apply flex w-full h-full;

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

  .header {
    @apply h-84px;
  }
}
</style>
