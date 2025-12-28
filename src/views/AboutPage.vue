<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>
<template>
  关于
  <br />
  <button @click="counterStore.increment">+</button>
  <p>{{ counterStore.count }}</p>
</template>
