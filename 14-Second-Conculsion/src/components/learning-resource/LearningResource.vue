<script setup lang="ts">
import BaseCard from "../util/BaseCard.vue";
import BaseButton from "../util/BaseButton.vue";
import { inject } from "vue";
defineProps<{
  id: string;
  title: string;
  description: string;
  link: string;
}>();

const removeResource: ((id: string) => void) | undefined =
  inject("removeResource");

const del = (id: string) => {
  removeResource!(id);
};
</script>

<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ title }}</h3>
        <BaseButton mode="flat" type="button" @click="del(id)"
          >Delete</BaseButton
        >
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </BaseCard>
  </li>
</template>

<style lang="scss" scoped>
li {
  margin: auto;
  max-width: 80rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 2.5rem;
  margin: 0.5rem 0;
}

p {
  font-size: 1.8rem;
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
