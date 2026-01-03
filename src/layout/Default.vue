<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <!-- 顶部导航栏 -->
        <navbar />
        <div class="tags-view">标签页</div>
      </div>
      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-wrapper {
  @apply flex w-full h-full;

  .sidebar-container {
    // 跨组件设置样式
    :deep(.sidebar-container-menu:not(.el-menu--collapse)) {
      @apply w-[var(--sidebar-width)];
    }
  }
  .main-container {
    @apply flex flex-col flex-1;
  }

  .header {
    @apply h-84px;

    .tags-view {
      @apply h-[var(--tagsview-height)] bg-blue;
    }
  }

  .app-main {
    @apply bg-cyan;
    min-height: calc(100vh - calc(var(--narbar-heigh) + var(--tagsview-height)));
  }
}
</style>
