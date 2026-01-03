<template>
  <div class="navbar">
    <Hamburger @toggleCollapse="toggleSidebar" :collapse="sidebar.opened" />
  </div>
</template>
<style lang="scss" scoped>
.navbar {
  @apply h-[var(--narbar-heigh)];
}
</style>
<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

// 控制收缩和展开
const { sidebar, toggleSidebar } = useAppStore();
// const collapse = ref(true);
// const handleCollapse = () => {
//   collapse.value = !collapse.value;
// };
</script>
