<template>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import UserItem from "./UserItem.vue";

interface User {
  id: string;
  fullName: string;
  role: string;
}
const users: User[] | undefined = inject("users");
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
