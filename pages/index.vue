<template>
  <div>
    <!-- hero -->
    <section>
      <div
        class="flex justify-between mx-0 gap-10 py-0 px-20 pt-12 pb-12 pr font-bold items-center"
      >
        <div>
          <img src="../assets/img/shop_333-removebg-preview.png" alt="" />
        </div>
        <div class="flex flex-col gap-9">
          <div class="text-5xl">
            <h1>
              NO.ONE STORE IN THE <br />
              WORLD!
            </h1>
          </div>
          <div>
            <p class="text-2xl">
              The best shop you can find in this world+this planet that's why
              <br />
              you should only buy in this whatever:
            </p>
          </div>
          <div>
            <nuxt-link to="/About"
              ><button
                class="bg-green-700 w-24 py-3 px-5 bode text-white rounded-2xl border-none hover:"
              >
                Explore
              </button></nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <!-- hero -->
    <!-- service -->
    <section>
      <div class="mx-0 items-center py-20 container font-medium px-20">
        <diV class="text-center font-semibold text-5xl">
          <h1>POPLAR PRODUCTS</h1>
        </diV>
        <div class="grid grid-cols-5 gap-16">
          <!-- <div
          class="h-fit shadow-xl border-2 shadow-cyan-500/50 rounded-md hover:scale-105 duration-200 ease-in -outline-offset-1 px-12 w-60 py-12 my-20 bg-white"
        >
          <img
            class=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mqjLdQvSEAAOc_j_jRgC2J0ILW9gl5pxhw&s"
            alt=""
          />
          <h1 class="font-bold">Kids' Backpacks | Lands' End</h1>
          <div>
            <p class="text-gray-400">Price: $ 300.85</p>
          </div>
          <div>
            <button class="text-green-400">View Detalis</button>
          </div>
        </div>
        

        
        <div
          class="h-fit shadow-xl border-2 shadow-cyan-500/50 rounded-md hover:scale-105 duration-200 ease-in -outline-offset-1 px-12 w-60 py-12 my-20 bg-white"
        >
          <img
            class=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTj7nfTzeRJYtiIw7Cu2HPMCd6I4LnEZQdjQ&s"
            alt=""
          />
          <h1 class="font-bold">
            Mens Casual Premium <br />
            Slim Fit T-Shirts
          </h1>
          <div class="">
            <p class="text-gray-400">Price: $ 22.3</p>
          </div>
          <div>
            <button class="text-green-400">View Detalis</button>
          </div>
        </div>
        
        <div
          class="h-fit shadow-xl border-2 hover:scale-105 duration-200 ease-in -outline-offset-1 shadow-cyan-500/50 rounded-md px-12 w-60 py-12 my-20 bg-white"
        >
          <img
            class=""
            src="https://images.meesho.com/images/products/15399293/a65br_256.webp"
            alt=""
          />
          <h1 class="font-bold">Mens Cotton Jackt</h1>
          <div class="">
            <p class="text-gray-400">Price: $ 55.99</p>
          </div>
          <div>
            <button class="text-green-400">View Detalis</button>
          </div>
        </div>
        
        <div
          class="h-fit shadow-xl border-2 hover:scale-105 duration-200 ease-in -outline-offset-1 shadow-cyan-500/50 rounded-md px-12 w-60 py-12 my-20 bg-white"
        >
          <img
            class=""
            src="https://img.fruugo.com/product/6/11/1330130116_max.jpg"
            alt=""
          />
          <h1 class="font-bold">Mens Casual Slim Fit</h1>
          <div class="">
            <p class="text-gray-400">Price: $ 15.99</p>
          </div>
          <div>
            <button class="text-green-400">View Detalis</button>
          </div>
        </div>
      
        <div
          class="h-fit shadow-xl border-2 hover:scale-105 duration-200 ease-in -outline-offset-1 shadow-cyan-500/50 rounded-md px-12 w-60 py-12 my-20 bg-white"
        >
          <img
            class=""
            src="https://down-cl.img.susercontent.com/file/sg-11134201-22120-ogllvzeggplv0a"
            alt=""
          />
          <h1 class="font-bold">
            legendery i dont know gold & <br />silver Drogon tation <br />
            chain Bracelet
          </h1>
          <div class="">
            <p class="text-gray-400">Price: $ 695</p>
          </div>
          <div>
            <button class="text-green-400">View Detalis</button>
          </div>
        </div> -->

          <Card v-for="product in productStore.five" :key="product.id" :props="product" />

          <!--  -->
        </div>
      </div>
    </section>
    <!-- service -->

    <!-- popular produt -->
    <section>
      <div class="mx-0 py-20 container flex flex-col gap-12 font-medium px-20">
        <h1 class="font-semibold text-center text-5xl">popular products By Categorys</h1>
        <div class="flex justify-center gap-5 pb-8">
          <button
            class="text-white bg-slate-700 px-4 py-2 hover:scale-105 duration-200 ease-in -outline-offset-1 hover:bg-lime-500 rounded-xl font-bold"
            v-for="product in productStore.categories"
            :key="product.id"
            @click="changeUrl(product)"
          >
            {{ product }}
          </button>
        </div>
      </div>
      <div class="grid mx-0 py-10 px-10 container grid-cols-4 gap-6">
        <Card
          v-for="product in productStore.jewelery"
          :key="product.id"
          :props="product"
        />
      </div>
    </section>
    <!-- popular produt -->
  </div>
</template>




<!--  -->
<!-- <div class="mx-0 py-20 container flex flex-col gap-12 font-medium px-20">
        <h1 class="font-semibold text-center text-5xl">popular products By Categorys</h1>
        <div class="flex justify-center gap-5 pb-8">   
       
          <Card v-for="product in productStore.bycategories" :key="product.id" :props="product" />
       
        </div>
      </div> -->
    <!--  -->

    

<script setup>
import { useProductsStore } from "~/store/products";

//Five ptoduct
const productStore = useProductsStore();
productStore.fetchFiveProducts();
productStore.fetchCategories();
productStore.fetchJewelery();
// 
useSeoMeta({
  title: "Aspeezee_store",
});
</script>

<style scoped></style>
