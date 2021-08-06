<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand mb-md-1" href="#">Culinary</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/foods">
              Foods
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/cart">
              Cart
              <i class="fas fa-shopping-cart"></i>
              <span
                v-show="
                  updateKeranjang
                    ? updateKeranjang.length > 0
                    : jumlah_pesanans.length > 0
                "
                class="badge bg-success ms-2"
                id="cartCount"
                >{{
                  updateKeranjang
                    ? updateKeranjang.length
                    : jumlah_pesanans.length
                }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  props: ["updateKeranjang"],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        this.setJumlah(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.badge {
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 100%;
}

#cartCount {
  font-size: 8px;
  color: #fff;
  position: relative;
  vertical-align: top;
  left: -15px;
}
</style>