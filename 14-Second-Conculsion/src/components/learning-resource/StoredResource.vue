<script setup lang="ts">
import { inject } from "vue";
import LearningResource from "./LearningResource.vue";
interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
}
const storedResources: Resource[] | undefined = inject("resource");
</script>

<template>
  <ul>
    <LearningResource
      v-for="res in storedResources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: auto;
  width: 80rem;
}
</style>
