<template>
  <Navbar />
  <div class="container">
    <Hero />
    <div class="row mt-5">
      <div class="col">
        <h2>Best <strong>Foods</strong></h2>
      </div>
      <div class="col d-flex justify-content-end align-items-center">
        <router-link to="/foods" class="btn btn-success">
          <i class="fas fa-eye"></i> See More
        </router-link>
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
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products?_limit=3")
      .then((response) => {
        this.setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  },
};
</script>
