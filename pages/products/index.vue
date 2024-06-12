<template>
  <div
    class="mx-0 items-center py-12 container font-medium px-20 grid grid-cols-5 gap-16"
  >
    <!--  -->
    <div v-for="fox in products" :key="fox.id">
      <Card :props="fox"/>
    </div>
    <!--  -->
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
