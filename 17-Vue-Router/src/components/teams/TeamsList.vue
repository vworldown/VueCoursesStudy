<template>
  <router-view></router-view>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import TeamsItem from "./TeamsItem.vue";
interface Team {
  id: string;
  name: string;
  members: string[];
}
const teams: Team[] | undefined = inject("teams");
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
