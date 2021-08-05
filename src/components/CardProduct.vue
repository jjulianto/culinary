<template>
  <div class="card shadow">
    <img
      :src="require(`../assets/images/${product.gambar}`)"
      class="card-img-top"
      style="object-fit: cover; height: 13em"
      alt="Foods thumbnail"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga: Rp. {{ product.harga }}</p>
      <a href="#" class="btn btn-success">
        <i class="fas fa-shopping-cart"></i> Pesan
      </a>
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