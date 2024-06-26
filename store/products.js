import { defineStore } from "pinia";
import {axiosApi} from "~/config/axios";

export const useProductsStore = defineStore("products", {
  state: () => ({
    loading: false,
    five: [],
    products: [],
    categories: [],
    jewelery: [],
    bycategories: [],
  }),
  actions: {
    async fetchFiveProducts() {
      try {
        this.loading = true;
        const response = await axiosApi.get("products?limit=5");
        if (response.status == 200) {
          this.five = response.data;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },

    async fetchProducts() {
      try {
        this.loading = true;
        const response = await axiosApi.get("products");
        if (response.status == 200) {
          this.products = response.data;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    
    async fetchCategories() {
      try {
        this.loading = true;
        const response = await axiosApi.get("products/categories");
        if (response.status == 200) {
          this.categories = response.data;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
     
    async fetchJewelery() {
      try {
        this.loading = true;
        const response = await axiosApi.get("products/category/jewelery/");
        if (response.status == 200) {
          this.jewelery = response.data;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },

    async fetchRoute() {
      try {
        this.loading = true;
        const response = await axiosApi.get("products");
        if (response.status == 200) {
          this. route = response.data;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },

    async fetchproductByCategories() {
      try {
        this.loading = true;
        const response = await axiosApi.get("products/1");
        if (response.status == 200) {
          this. bycategories = response.data;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },

  },
});

