<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading ...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No results to show ...
      </p>
      <ul v-else-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import SurveyResult from "./SurveyResult.vue";

// defineProps<{
//   results: {
//     id: string;
//     name: string;
//     rating: string;
//   }[];
// }>();

interface ResArr {
  id: string;
  name: string;
  rating: string;
}

let results = reactive([]) as ResArr[];
let isLoading = ref(true);

const loadExperience = () => {
  isLoading.value = true;
  fetch("https://vue-http-demo-81688-default-rtdb.firebaseio.com/survey.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      results.length = 0;
      for (const id in data) {
        results.push({
          id: id,
          name: data[id].name,
          rating: data[id].rating,
        });
      }
      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
      isLoading.value = false;
    });
};

onMounted(() => {
  loadExperience();
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
