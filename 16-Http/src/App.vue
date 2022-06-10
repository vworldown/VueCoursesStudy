<template>
  <learning-survey @survey-submit="storeSurvey"></learning-survey>
  <user-experiences :results="savedSurveyResults"></user-experiences>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import LearningSurvey from "./components/survey/LearningSurvey.vue";
import UserExperiences from "./components/survey/UserExperiences.vue";

const savedSurveyResults: { name: string; rating: string; id: string }[] =
  reactive([]);

function storeSurvey(surveyData: { userName: string; rating: string }) {
  const surveyResult = {
    name: surveyData.userName,
    rating: surveyData.rating,
    id: new Date().toISOString(),
  };
  savedSurveyResults.push(surveyResult);
  console.log(surveyResult);
}
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
