<template>
  <IconifyIcon :class="svgClass" :icon="iconName" v-if="!isExt"></IconifyIcon>
  <template v-else>
    <div :style="styleExternalIcon" :class="svgClass" bg-current v-bind="$attrs"></div>
  </template>
</template>

<script lang="ts" setup>
import { isExternal } from "@/utils/validate";
import { Icon as IconifyIcon } from "@iconify/vue";

// const props = withDefaults(
//   defineProps<{
//     iconName: string;
//     customClass?: string;
//   }>(),
//   { customClass: "" }
// );
const { iconName, customClass } = defineProps<{
  iconName: string;
  customClass?: string;
}>();

const isExt = computed(() => isExternal(iconName));

// class="customClass + icon"
// 组合类名
const svgClass = computed(() => (customClass ? `icon ${customClass}` : "icon"));

// 通过mask渲染svg图标 但兼容性差 可以通过请求svg的方式渲染
const styleExternalIcon = computed(() => ({
  mask: `url(${iconName}) no-repeat 50% 50%`,
  "-webkit-mask": `url(${iconName}) no-repeat 50% 50%`,
  "mask-size": "cover",
}));
</script>

<!-- 在实现图标时 尽量采用svg 不要采用font图标 -->
