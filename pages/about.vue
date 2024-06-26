<template>
  <div>
    <!-- about us -->
    <section>
      <div
        class="mx-0 px-20 text-center items-center py-20 container font-medium"
      >
        <div class="font-bold text-center">
          <h1 class="font-bold text-4xl">About Us</h1>

          <div class="grid grid-col-4">
            <Card
              v-for="product in productStore.products"
              :key="product.id"
              :props="product"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProductsStore } from "~/store/products";

const productStore = useProductsStore();
 productStore.fetchProducts();
</script>

<style scoped></style>
