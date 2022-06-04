<script setup lang="ts">
import BaseLayout from "./components/BaseLayout.vue";
import MyComponent from "./components/MyComponent.vue";
import FancyList from "./components/FancyList.vue";
// import SonComponent from './components/SonComponent.vue';
</script>

<template>
  <!-- 普通插槽 -->
  <!-- <SonComponent>
    <span style="color:red">Click me!</span>
    <span>Yes</span>
  </SonComponent> -->

  <!-- 具名插槽 -->
  <BaseLayout>
    <template v-slot:header>
      <h1>Header</h1>
    </template>
    <template #default>
      <h1>Content</h1>
    </template>
    <template #footer>
      <h1>Footer</h1>
    </template>
  </BaseLayout>

  <MyComponent v-slot="{ text, count }"> {{ text }} - {{ count }} </MyComponent>

  <FancyList>
    <!-- v-slot: 是绑定插槽， v-slot= 是获取插槽上的值 -->
    <template #item="item">
      <p>{{ item.body }}</p>
    </template>
  </FancyList>
</template>

<style></style>
