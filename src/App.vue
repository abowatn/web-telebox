<template>
  <div id="app">
    <ac-navbar></ac-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AcNavbar from '@/components/Navbar'
  export default {
    components: { AcNavbar },
    name: 'app'
  }
</script>

<style src="./assets/sass/app.scss" lang="sass">

</style>
