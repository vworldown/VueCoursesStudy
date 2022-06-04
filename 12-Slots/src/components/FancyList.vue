<script setup lang="ts">
const items = [
  {
    body: "body1"
  },
  {
    body: "body2"
  },
  {
    body: "body3"
  },
]
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item">
      <!-- 
        v-bind="item" 和 :item="item" 的区别，
        v-bind="item" 之后 li 标签上的属性显示为 { body: "body1" }
        v-bind:item="item" 之后 li 标签上的属性显示为 { "item": {"body": "body1"} }
      -->
      <slot name="item" v-bind="item"></slot>
    </li>
  </ul>
</template>

<style></style>
