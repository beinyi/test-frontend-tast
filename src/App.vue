<script setup lang="ts">
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
</script>

<template>
  <main>
    <Left />
    <Right />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
