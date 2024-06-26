<template>
  <div>
    <div
      class="h-fit shadow-xl hover:scale-105 duration-200 ease-in -outline-offset-1 border-2 shadow-cyan-500/50 rounded-md px-12 w-60 py-12 my-20 bg-white"
    >
     <img :src='props.image' alt="products">
      <div>
      <h1 class="font-bold">
        {{ props.title }}
      </h1>
        <p class="text-gray-400">Price: $ {{ props.price }} </p>
        <div>
          <button class="text-green-400" @click="navigateTo(`/products/${props.id}`)" >
          View Detalis</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['props'])
</script>
<style scoped></style>
