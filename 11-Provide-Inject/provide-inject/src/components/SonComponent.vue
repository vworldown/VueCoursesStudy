<script setup lang="ts">
import { inject } from "vue";
const { num, randomNum } = inject("message")!;
</script>

<template>
  <h1>{{ num }}</h1>
  <button @click="randomNum">Change Value</button>
</template>

<style></style>
