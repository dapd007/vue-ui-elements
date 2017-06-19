<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          Vui Elements
        </a>
      </div>

      <div class="nav-center">
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
          <!--TODO Replace wIconicon component-->
        </a>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu" :class="{'is-active' : isMenuActive}">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/docs" class="nav-item">Documentation</router-link>

        <div class="nav-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button" >
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
                <span>Tweet</span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {

    data() {
        return {
          isMenuActive: false
        }
    },
    mounted() {

    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        }
    }
}
</script>
