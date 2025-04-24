<template>
  <Item
    v-for="({ id, name }, i) in props.items"
    :key="i"
    :title="name"
    :id="id"
    @click="() => handleClick(id)"
  />
</template>

<script setup lang="ts">
import type { Product } from "../../models/product";
import Item from "./Item.vue";

const props = defineProps({
  items: Array<Product>,
});
const emit = defineEmits<{
  (e: "onItemClick", id: number): void;
}>();

function handleClick(id: number) {
  emit("onItemClick", id);
}
</script>

<style scoped></style>
