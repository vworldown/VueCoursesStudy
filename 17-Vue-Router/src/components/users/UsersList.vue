<template>
  <button @click="confirmInput">Confirm</button>
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
import { useRouter } from "vue-router";
import UserItem from "./UserItem.vue";

interface User {
  id: string;
  fullName: string;
  role: string;
}
const users: User[] | undefined = inject("users");

const router = useRouter();
function confirmInput() {
  // do something ..
  // wanna back to /teams
  router.push("/teams");
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
