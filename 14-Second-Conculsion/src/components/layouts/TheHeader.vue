<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 8rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  font-size: 3rem;
  color: #fff;
}
</style>
