<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>
<template>
  主页
  <br />
  <button @click="counterStore.increment">+</button>
  <p>{{ counterStore.count }}</p>
</template>
