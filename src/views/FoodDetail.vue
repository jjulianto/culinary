<template>
  <Navbar />
  <div class="container">
    <div class="row mt-2">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-dark text-decoration-none">
                Home
              </router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/foods" class="text-dark text-decoration-none">
                Foods
              </router-link>
            </li>
            <li
              class="breadcrumb-item active"
              style="font-weight: bold; color: #000"
              aria-current="page"
            >
              Food Order
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row mt-2" style="margin-bottom: 6em">
      <div class="col-md-6 mb-md-0 mb-5">
        <img
          :src="'../assets/images/' + product.gambar"
          class="img-fluid shadow"
          alt="Food"
        />
      </div>
      <div class="col-md-6">
        <h2>
          <strong>{{ product.nama }}</strong>
        </h2>
        <hr />
        <h4>
          Harga: <strong>Rp. {{ product.harga }}</strong>
        </h4>
        <form v-on:submit.prevent>
          <div class="form-group mb-3 mt-3">
            <label for="order-quantity">Order Quantity</label>
            <input
              type="number"
              class="form-control"
              v-model="pesan.jumlah_pemesanan"
            />
          </div>
          <div class="form-group mb-3">
            <label for="description">Description</label>
            <textarea
              v-model="pesan.keterangan"
              name=""
              id=""
              class="form-control"
              rows="5"
              placeholder="Pedas, Nasi Setengah"
            ></textarea>
          </div>
          <button class="btn btn-success" type="submit" @click="pemesanan">
            <i class="fas fa-shopping-cart"></i> Order
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {            
            this.$router.push({ path: "/cart" });
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Order Quantity Must be Filled!",
        });
      }
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/products/${this.$route.params.id}`)
      .then((response) => {
        this.setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  },
};
</script>

<style>
</style>