<template>
  <!-- navbar -->
  <section>
    <div
      class="flex justify-between mx-0 py-0 px-20 shadow-xl font-bold text-2xl items-center bg-lime-700 text-white h-24"
    >
      <div>
        <nuxt-link to="/Realstore">Realstore</nuxt-link>
      </div>
      <div class="flex gap-10">
        <div><nuxt-link to="/">Home</nuxt-link></div>
        <div><nuxt-link to="/product">products</nuxt-link></div>
      </div>
      <div>
        <nuxt-link to="">login</nuxt-link>
      </div>
    </div>
  </section>
  <!-- navbar -->
</template>

<script setup></script>

<style scoped></style>