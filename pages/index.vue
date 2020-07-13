<template>
  <div class="container-fluid">
    <app-header />
    <app-jumbotron />
    <app-grid />
    <app-carousel />
    <!-- <app-carousel2 /> -->
    <app-footer v-bind="msgArray" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Jumbotron from "../components/Jumbotron.vue";
import Grid from "../components/Grid.vue";
import Carousel from "../components/Carousel.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-jumbotron": Jumbotron,
    "app-grid": Grid,
    "app-carousel": Carousel
  },
  data() {
    return {
      position: ""
    };
  }
};
</script>

<style scoped>
body {
  margin: 0 auto;
}
.container-fluid {
  padding: 0;
}
</style>
