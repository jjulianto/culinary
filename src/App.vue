<template>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
}

.router-link-exact-active {
  font-weight: bold;
}

.card-img-top {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
</style>