<template>
  <div class="navbar" flex>
    <Hamburger @toggleCollapse="toggleSidebar" :collapse="sidebar.opened" />
    <breadcrumb></breadcrumb>

    <div flex justify-end flex-1 items-center mr-20px>
      <screenfull mx-5px></screenfull>
      <el-tooltip content="ChangeSize" placement="bottom">
        <size-select></size-select>
      </el-tooltip>

      <svg-icon
        icon-name="ant-design:setting-outlined"
        size-2em
        @click="openShowSetting"
      ></svg-icon>

      <avatar></avatar>
    </div>
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

const emit = defineEmits<{
  (event: "showSetting", isShow: boolean): void;
}>();

const openShowSetting = () => {
  emit("showSetting", true);
};
</script>
