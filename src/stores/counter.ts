// stores示例 - 计数器
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  // vue3 setup函数

  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  return { count, increment };
});
