<script lang="ts" setup>
import { ref } from "vue";
import BaseModal from "./components/BaseModal.vue";

const dialogIsVisible = ref(false);
const paraIsVisible = ref(false);

function showDialog() {
  dialogIsVisible.value = true;
}
function hideDialog() {
  dialogIsVisible.value = false;
}

function animateBlock() {
  let block: HTMLElement = document.querySelector(".block")!;
  block.style.transform = "translateX(5rem)";
}

function toggleParagraphy() {
  paraIsVisible.value = !paraIsVisible.value;
}

function beforeEnter(el: HTMLElement) {
  console.log("beforeEach");
  console.log(el);
  el.style.opacity = "0";
}

function enter(el: HTMLElement, done: any) {
  console.log("enter");
  console.log(el);
  let round = 1;
  const interval = setInterval(() => {
    el.style.opacity = round * 0.01 + "";
    round++;
    if (round > 100) {
      clearInterval(interval);
      done();
    }
  }, 20);
}

function afterEnter(el: HTMLElement) {
  console.log("afterEnter");
  console.log(el);
  el.style.opacity = "1";
}

function beforeLeave(el: HTMLElement) {
  console.log("beforeLeave");
  console.log(el);
  el.style.opacity = "1";
}

function leave(el: HTMLElement, done: any) {
  console.log("leave");
  console.log(el);
  let round = 100;
  const interval = setInterval(() => {
    el.style.opacity = round * 0.01 + "";
    round--;
    if (round < 0) {
      clearInterval(interval);
      done();
    }
  }, 20);
}

function afterLeave(el: HTMLElement) {
  console.log("afterLeave");
  console.log(el);
  el.style.opacity = "0";
}
</script>

<template>
  <div class="container">
    <div class="block"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- :css="false" 告诉 vue 这个 transition 组件不会使用 css 效果过渡 -->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <p v-if="paraIsVisible">This is only sometimes visible ...</p>
    </transition>
    <button @click="toggleParagraphy">Toggle Paragraph</button>
  </div>
  <BaseModal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </BaseModal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: all 0.5s;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

/* .para-enter-from,
.para-leave-to {
  opacity: 0;
}

.para-enter-active,
.para-leave-active {
  transition: all 1s;
}

.para-enter-to,
.para-leave-from {
  opacity: 1;
} */
</style>
