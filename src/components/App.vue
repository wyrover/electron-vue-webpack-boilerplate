<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
  import Navbar from './Navbar.vue'

  export default {
    name: "App",

    components: {
      Navbar
    }
  }
</script>

