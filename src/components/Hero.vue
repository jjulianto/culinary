<template>
  <div class="row mt-4">
    <div class="col-md-6 order-md-2">
      <img src="../assets/images/ilustrasi.png" class="w-100" alt="hero" />
    </div>
    <div class="col-md-6 order-md-1 mt-4">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center">
          <h2>
            <strong>Delicious Food Menu, </strong> <br />
            in Your Gadget
          </h2>
          <p>Let's choose and order your favorite food!</p>
          <router-link to="/foods" class="btn btn-lg btn-success">
            Order
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>