<template>
  <div class="item">
    <p>{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  id: Number,
});
</script>

<style scoped>
.item {
  cursor: pointer;
  height: 64px;
  width: 64px;
}
</style>
