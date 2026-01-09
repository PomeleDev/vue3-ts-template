<template>
  <el-config-provider :size="store.size" :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { useAppStore } from "./stores/app";
import en from "element-plus/dist/locale/en.mjs";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));

const store = useAppStore();
</script>
