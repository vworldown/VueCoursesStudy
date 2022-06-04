<script setup lang="ts">
import FatherComponent from "./components/FatherComponent.vue";
import { provide, ref } from "vue";

const num = ref(0);

const randomNum = () => {
  console.log(num.value);
  num.value = Math.random() * 10;
};

// 第一个参数为注入名，第二个参数为值
provide("message", {
  num,
  randomNum,
});
</script>

<template>
  <FatherComponent />
  <!-- 当我们需要在 SonComponent 组件中修改数据时 -->
  <!-- <button @click="randomNum">Change Number</button> -->
</template>

<style></style>
