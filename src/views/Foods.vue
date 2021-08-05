<template>
  <Navbar />
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h1><strong>Foods</strong> List</h1>
      </div>
    </div>
    <div class="row mt-1">
      <div class="input-group mb-3">
        <input
          v-model="search"
          type="text"
          class="form-control"
          placeholder="Search Food"
          aria-label="Search Food"
          aria-describedby="basic-addon1"
          @keyup="searchFood"
        />
        <span class="input-group-text bg-success text-white" id="basic-addon1">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
        <CardProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get(`http://localhost:3000/products?q=${this.search}`)
        .then((response) => {
          this.setProducts(response.data);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        this.setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  },
};
</script>

<style>
</style>