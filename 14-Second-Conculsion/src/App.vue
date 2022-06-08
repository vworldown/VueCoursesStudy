<script setup lang="ts">
import StoredResource from "./components/learning-resource/StoredResource.vue";
import { provide, reactive } from "vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResource from "./components/learning-resource/TheResource.vue";

const storedResources = reactive([
  {
    id: "official-guide",
    title: "Official Guide",
    description: "The official Vue.js documentation.",
    link: "https://vuejs.org",
  },
  {
    id: "google",
    title: "Google",
    description: "Learn to google ...",
    link: "https://google.com",
  },
]);

provide("resource", storedResources);

const addResource = (
  id: string,
  title: string,
  description: string,
  link: string
) => {
  const newData = {
    id,
    title,
    description,
    link,
  };
  console.log(newData);
  storedResources.unshift(newData);
};

const removeResource = (id: string) => {
  const index = storedResources.findIndex((item) => item.id === id);
  console.log(index);
  storedResources.splice(index, 1);
};
</script>

<template>
  <TheHeader title="RememberMe" />
  <TheResource @add="addResource" @remove="removeResource"></TheResource>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto Mono", monospace;
  font-weight: 300;
  line-height: 1.6;
}
</style>
