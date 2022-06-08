<script setup lang="ts">
import { ButtonHTMLAttributes } from "vue";

defineProps<{
  type?: ButtonHTMLAttributes["type"];
  mode?: string | null;
}>();
</script>

<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 0.75rem 1.5rem;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: #fff;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #270041;
    border-color: #270041;
  }
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;

  &:hover,
  &:active {
    background-color: #edd2ff;
  }
}
</style>
