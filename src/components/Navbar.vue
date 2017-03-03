
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
            <li v-link="{ path: '/home', activeClass: 'current' }">
              <a v-link="{ path: '/home' }">Home</a>
            </li>
            <li v-link="{ path: '/work', activeClass: 'current' }">
              <a v-link="{ path: '/work', activeClass: 'current' }">Trabalhos</a>
            </li>
            <li v-link="{ path: '/contact', activeClass: 'current' }">
              <a v-link="{ path: '/contact', activeClass: 'current' }">Contato</a>
            </li>
            <li v-link="{ path: '/admin', activeClass: 'current' }">
              <a v-link="{ path: '/admin', activeClass: 'current' }">Admin</a>
            </li>
          </ul>
        </nav>
    </div>
</template>
