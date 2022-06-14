<template>
  <p v-if="!team">No team's id named {{ id }}</p>
  <section v-else>
    <h2>{{ team.name }}</h2>
    <ul>
      <user-item
        v-for="member in user"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team2</router-link>
  </section>
</template>

<script setup lang="ts">
import { inject, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import UserItem from "../users/UserItem.vue";

// let teamName = ref("Test");
// let members = reactive([
//   { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
//   { id: "u2", fullName: "Max Schwarz", role: "Engineer" },
// ]);

interface Team {
  id: string;
  name: string;
  members: string[];
}

interface User {
  id: string;
  fullName: string;
  role: string;
}

const route = useRoute();
let id: string = "";
let teams: Team[] = inject("teams")!;
const users: User[] = inject("users")!;
let user = reactive<User[]>([]);
let team = reactive<Team>({
  id: "",
  name: "",
  members: [""],
});

function loadTeamMembers() {
  user.length = 0;
  id = route.params?.id as string;
  team = teams.find((item) => item.id === id)!;
  if (team) {
    for (let item of team.members) {
      user.push(users.find((i) => i.id === item)!);
    }
  }
}

loadTeamMembers();

watch(
  () => route.params,
  (previous, current) => {
    loadTeamMembers();
  },
  {
    deep: true,
  }
);
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
