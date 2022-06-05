<script setup lang="ts">
// Vue 基本类型的数据 数据传递是单向的，
// 意思就是 父组件 传值给了 子组件，
// 无论子组件怎么修改父组件的值都对父组件产生不了影响;
defineProps<{
  show: boolean;
}>();

// 所以我们要使用 emit 去改变父组件的值
const emit = defineEmits<{
  (e: "change"): void;
}>();

function close() {
  emit('change')
}
</script>

<template>
  <transition name="modal">
    <div v-if="show" class="modal">
      <p>Hello from the modal!</p>
      <button @click="close">Close</button>
    </div>
  </transition>
</template>

<style>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  transition: all 1s;
  border: 1px solid #000;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
