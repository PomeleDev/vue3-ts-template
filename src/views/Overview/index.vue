<template>
  仪表盘
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
