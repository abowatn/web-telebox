<script>
  export default{
    name: 'menu'
  }
</script>
<template>    
    <div id="header">
      <!-- Address -->
      <ul id="address">
        <!--<li><h2><i class="fa fa-phone"></i> (41) 3345-5654</h2></li> -->
      </ul>
      <!-- Logo -->
      <h1><a href="index.html" id="logo"><img src="../assets/images/logo.png"></a></h1>

      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li router-link to="/home">
            <router-link to="/home">Home</router-link>
          </li>
          <li router-link to = "/work">
            <router-link to="/work">Trabalhos</router-link>
          </li>
          <li router-link="{ path: '/contact', activeClass: 'current' }">
            <router-link to="/contact">Contato</router-link>
          </li>
          <li router-link="{ path: '/admin', activeClass: 'current' }">
            <router-link to="/admin">Admin</router-link>
          </li>
        </ul>
      </nav>
    </div>
</template>
