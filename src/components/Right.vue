<template>
  <div class="wrapper">
    <Container @on-item-click="toggleProduct" :items="basket" />
    <Container @on-item-click="toggleProduct" :items="showcase" />
  </div>
</template>

<script setup lang="ts">
import { useBasket } from "../hooks/useBasket";
import { leftItems } from "../store/store";
import Container from "./common/Container.vue";

const { toggleProduct, basket, showcase } = useBasket({
  products: leftItems,
  limit: 1,
});
</script>

<style scoped></style>
