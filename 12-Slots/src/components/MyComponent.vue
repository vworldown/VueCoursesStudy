<script setup lang="ts"></script>

<template>
  <div>
    <!-- 绑定在 slot 标签上的值, 在组件上使用 v-slot="" 可以接受到一个参数对象 -->
    <slot text="greetingMessage" count="1"></slot>
  </div>
</template>

<style></style>
