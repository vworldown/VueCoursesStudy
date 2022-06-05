<script setup lang="ts">
import MyModal from "./components/MyModal.vue";

import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <div class="outer">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <button @click="open = true">Open Modal</button>
    <teleport to="body">
      <div>
        <MyModal :show="open" @change="open = false" />
      </div>
    </teleport>
  </div>
</template>

<style></style>
