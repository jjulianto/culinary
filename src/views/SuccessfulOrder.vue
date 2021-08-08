<template>
  <Navbar />
  <div class="container">
    <div class="row justify-content-center mt-5" style="margin-bottom: 7em">
      <div class="col text-center">
        <img src="../assets/images/menunggu.png" width="300" />
        <h2><strong>Success!!</strong></h2>
        <h4>
          Your Order Will be Processed Immediately <br />
          Please Wait...
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "SuccessfulOrder",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>