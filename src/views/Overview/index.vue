<template>
  <div>
    <!-- <div i-ant-design:apple-filled inline-block w-1em h-1em align-middle></div>
  <div icon i-ant-design:apple-filled></div> -->
    <el-button @click="handleClick">你好</el-button>
    <svg-icon icon-name="ant-design:apple-filled" custom-class="text-blue-100"> </svg-icon>
    <svg-icon icon-name="token-branded:1art" custom-class="text-red w-2em h-2em"> </svg-icon>
    <svg-icon icon-name="logos:android-icon"> </svg-icon>

    <svg-icon
      icon-name="https://zishui.oss-cn-beijing.aliyuncs.com/BugFilled.svg"
      :custom-class="`text-blue-100 ${val}`"
      @click="handleClick"
    >
    </svg-icon>
    <!-- <HelloWorld msg="hello" /> -->
    <input type="text" />

    <el-date-picker type="date" :size="size" />
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

defineOptions({
  name: "overview",
});
// 将服务型组件 通过实例调用
const { proxy } = getCurrentInstance()!;

const { size } = useAppStore();

const handleClick = () => {
  proxy?.$message.success("欢迎你");
};

const val = ref("bg-gray");

setTimeout(() => {
  val.value = "bg-white";
}, 1000);
</script>
