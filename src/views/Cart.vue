<template>
  <Navbar :updateKeranjang="keranjangs" />
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
              Cart
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>My <strong>Cart</strong></h2>
        <div class="table-responsive mt-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Photo</th>
                <th scope="col">Food</th>
                <th scope="col">Description</th>
                <th scope="col">Total</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>
                  <img
                    :src="'../assets/images/' + keranjang.products.gambar"
                    class="img-fluid shadow"
                    width="250"
                  />
                </td>
                <td>{{ keranjang.products.nama }}</td>
                <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                <td>{{ keranjang.jumlah_pemesanan }}</td>
                <td align="right">Rp. {{ keranjang.products.harga }}</td>
                <td align="right">
                  Rp.
                  {{ keranjang.products.harga * keranjang.jumlah_pemesanan }}
                </td>
                <td align="center">
                  <button
                    class="btn btn-danger"
                    @click="hapusKeranjang(keranjang.id)"
                    type="submit"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan="6" align="right">
                  <strong>Total Harga :</strong>
                </td>
                <td align="right">
                  <strong>Rp. {{ totalHarga }}</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Cart",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete(`http://localhost:3000/keranjangs/${id}`)
        .then(() => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Successfully Delete Order.",
          });
          axios
            .get(`http://localhost:3000/keranjangs`)
            .then((response) => {
              this.setKeranjangs(response.data);
            })
            .catch((error) => {
              console.log("Error: ", error);
            });
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/keranjangs`)
      .then((response) => {
        this.setKeranjangs(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>