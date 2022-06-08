<script setup lang="ts">
import BaseCard from "../util/BaseCard.vue";
import BaseButton from "../util/BaseButton.vue";
import StoredResource from "./StoredResource.vue";
import AddResource from "./AddResource.vue";
import { computed, provide, ref } from "vue";

const emits = defineEmits<{
  (
    e: "add",
    id: string,
    title: string,
    description: string,
    link: string
  ): void;
  (e: "remove", id: string): void;
}>();

let selectTab = ref("StoredResource");

function setSelectTab(val: string) {
  console.log(selectTab.value);
  selectTab.value = val;
}

let storedButtonMode = computed(() => {
  return selectTab.value === "StoredResource" ? null : "flat";
});

let addButtonMode = computed(() => {
  return selectTab.value === "AddResource" ? null : "flat";
});

let addResource = (title: string, description: string, link: string) => {
  selectTab.value = "StoredResource";
  emits("add", new Date().toISOString(), title, description, link);
};

provide("addResource", addResource);

let removeResource = (id: string) => {
  emits("remove", id);
};

provide("removeResource", removeResource);
</script>

<template>
  <BaseCard>
    <BaseButton @click="setSelectTab('StoredResource')" :mode="storedButtonMode"
      >Stored Resources</BaseButton
    >
    <BaseButton @click="setSelectTab('AddResource')" :mode="addButtonMode"
      >Add Resource</BaseButton
    >
  </BaseCard>
  <component
    :is="selectTab === 'StoredResource' ? StoredResource : AddResource"
  ></component>
</template>

<style></style>
