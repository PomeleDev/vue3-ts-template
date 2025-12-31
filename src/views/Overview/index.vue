<template>
  仪表盘
  <div i-ant-design:apple-filled inline-block w-1em h-1em align-middle></div>
  <div icon i-ant-design:apple-filled></div>
  <el-button @click="handleClick">你好</el-button>
  <HelloWorld msg="hello" />
</template>

<script lang="ts" setup>
// 将服务型组件 通过实例调用
const { proxy } = getCurrentInstance()!;

const handleClick = () => {
  proxy?.$message.success("欢迎你");
};
</script>
