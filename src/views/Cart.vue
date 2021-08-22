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
                  <strong>Total Price :</strong>
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
    <div class="row justify-content-end mb-5">
      <div class="col-md-4">
        <form v-on:submit.prevent>
          <div class="form-group mb-3 mt-3">
            <label for="name">Name:</label>
            <input type="text" class="form-control" v-model="pesan.nama" />
          </div>
          <div class="form-group mb-3">
            <label for="noTable">No Table:</label>
            <input type="number" class="form-control" v-model="pesan.noMeja" />
          </div>
          <div class="d-flex justify-content-end">
            <button
              class="btn btn-success float-right"
              type="submit"
              @click="checkout"
            >
              <i class="fas fa-shopping-cart"></i> Order
            </button>
          </div>
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
  name: "Cart",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://myculinary.herokuapp.com/api/keranjangs/${id}`)
            .then(() => {
              Swal.fire("Deleted!", "Your cart has been deleted.", "success");
              axios
                .get(`https://myculinary.herokuapp.com/keranjangs`)
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
        }
      });
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.keranjangs = this.keranjangs;
        axios
          .post("https://myculinary.herokuapp.com/api/pesanans", this.pesan)
          .then(() => {
            this.keranjangs.map(function (item) {
              return axios
                .delete(`https://myculinary.herokuapp.com/keranjangs/${item.id}`)
                .catch((error) => {
                  console.log(error);
                });
            });
            this.$router.push({ path: "/successful-order" });
            Swal.fire({
              title: "Success",
              text: "Order successfully.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Name and No Table Must be Filled!",
        });
      }
    },
  },
  mounted() {
    axios
      .get(`https://myculinary.herokuapp.com/api/keranjangs`)
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