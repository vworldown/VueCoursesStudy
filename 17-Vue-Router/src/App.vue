<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
  <router-view name="footer"></router-view>
</template>

<script lang="ts" setup>
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TheNavigation from "./components/nav/TheNavigation.vue";
import { provide, reactive, shallowRef } from "vue";

let activePage = shallowRef(TeamsList);
let teams = reactive([
  { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
  { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u3"] },
  { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
]);
let users = reactive([
  { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
  { id: "u2", fullName: "Praveen Kumar", role: "Engineer" },
  { id: "u3", fullName: "Julie Jones", role: "Engineer" },
  { id: "u4", fullName: "Alex Blackfield", role: "Consultant" },
  { id: "u5", fullName: "Marie Smith", role: "Consultant" },
]);

function setActivePage(page: string) {
  if (page === "teams-list") {
    activePage.value = TeamsList;
  } else {
    activePage.value = UsersList;
  }
}

provide("teams", teams);
provide("users", users);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
