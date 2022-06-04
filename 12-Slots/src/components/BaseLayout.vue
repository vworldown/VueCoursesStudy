<script setup lang="ts"></script>

<template>
  <div class="container">
    <header>
      <!-- 标题内容放这里 -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 主要内容放这里 -->
      <!-- <slot name="header"></slot> -->
      <slot></slot>
    </main>
    <footer>
      <!-- 底部内容放这里 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style></style>
