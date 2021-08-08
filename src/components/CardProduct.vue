<template>
  <div class="card shadow">
    <img
      :src="'assets/images/' + product.gambar"
      class="card-img-top"
      style="object-fit: cover; height: 13em"
      alt="Foods thumbnail"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Price: Rp. {{ product.harga }}</p>
      <router-link :to="`/foods/${product.id}`" class="btn btn-success">
        <i class="fas fa-shopping-cart"></i> Order
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    product: Object,
  },
};
</script>

<style>
</style>