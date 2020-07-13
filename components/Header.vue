<template>
  <div class="header">
    <div>
      <b-progress
        v-bind:value="position[1] / 10"
        :max="230"
        variant="warning"
        striped
        :animated="animate"
      ></b-progress>
    </div>
    <!-- <p>{{ position[1] }}</p> -->
    <!-- <p>{{ position[1] / 10 }}</p> -->
    <!-- <b-nav v-if="position[1] < 100" pills class="nav nav-stacked mx-5" v-on:scroll="!handleScroll">
      <b-navbar-brand href="#">Navbar</b-navbar-brand>
      <b-nav-item href="#item-1">Item 1</b-nav-item>
      <b-nav-item href="#item-2">Item 2</b-nav-item>
      <b-nav-item href="#item-3">Item 3</b-nav-item>
    </b-nav>-->
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      v-if="position[1] < 100"
      v-on:scroll="!handleScroll"
      class="mx-5"
    >
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import windowScrollPosition from "../mixins/window-scroll-position";

export default {
  mixins: [windowScrollPosition("position")],
  data() {
    return {
      animate: true,
      max: 100
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {}
  }
};
</script>

<style scoped>
/* Style the header: fixed position (always stay at the top) */
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}

/* The progress container (grey background) */
.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

/* The progress bar (scroll indicator) */
.progress-bar {
  height: 4px;
  background: #4ab;
  width: 0%;
}
nav {
  padding-top: 8px;
}
</style>
