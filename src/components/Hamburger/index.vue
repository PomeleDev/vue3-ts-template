<template>
  <div class="hamburger-container">
    <svg-icon
      icon-name="ant-design:left-outlined"
      custom-class="hamburger"
      :class="{ 'rotate-180': collapse }"
      @click="handleClick"
    />
  </div>
</template>
<style scoped lang="scss">
.hamburger-container {
  @apply leading-[--narbar-heigh] float-left cursor-pointer px-10px hover:(bg-black/5);
}
.hamburger {
  @apply w-30px h-30px transition-transform duration-300;
}
</style>
<script lang="ts" setup>
const { collapse } = defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{ (e: "toggleCollapse"): void }>();
const handleClick = () => {
  emit("toggleCollapse");
};
</script>
