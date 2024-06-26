<template>
  <div
    class="h-fit shadow-xl border-2 text-center shadow-cyan-500/50 rounded-md px-12 w-fit py-12 my-20 bg-white"
  >
    <div>
      <h1 class="font-bold text-2xl">
        {{ product.title }}
      </h1>
      <div>
        <div class="flex justify-center py-5">
          <img class="h-24" :src="product.image" alt="" />
        </div>
        <div>
          <p>{{ product.category }}</p>
          <p class="text-gray-400">price $ = {{ product.price }}</p>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

 <script setup>
// const route = useRoute().params.id;

// const { data: product } = await useFetch(`https://fakestoreapi.com/products/${route}`);



</script>

<style scoped></style>
