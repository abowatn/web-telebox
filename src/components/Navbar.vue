<script>
  import AcLogin from '@/components/Login'
  export default{
    name: 'Navbar',
    components: {
      AcLogin
    },
    data () {
      return {
        showModal: false
      }
    }
  }
</script>
<template>
  <div id="header">

    <ac-login v-if="showModal" @close="showModal = false"></ac-login>

    <!--    <button @click="showModal = true">Mostra modal</button> -->

        <!-- Logo -->
    <h1><a href="index.html" id="logo"><img src="../assets/images/logo.png"></a></h1>

    <!-- Address -->
    <ul id="address">
      <li><h2><i class="fa fa-phone"></i> (41) 3345-5654</h2></li>
    </ul>

    <!-- Nav -->
    <nav id="nav">
      <ul >
        <li>
          <router-link  activeClass="current" to="/home" active-class="true">Home</router-link>
        </li>
        <li>
          <router-link to="/work">Trabalhos</router-link>
        </li>
        <li>
          <router-link to="/contact">Contato</router-link>
        </li>
        <li>
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
  #address{
    margin-top: -30px;
  }
  #adress h2 {
    margin-botton: -25px;
  }
</style>
