<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import AcFooter from '@/components/Footer'

  Vue.use(VueAxios, axios)

  export default {
    name: 'work',
    mounted () {
      Vue.axios.get('http://localhost:5000/images').then((response) => {
        this.images = response.data
      })
    },
    data () {
      return {
        images: '',
        URL: 'http://localhost:5000/',
        src: ''
      }
    },
    components: { AcFooter }
  }
</script>
<template>
    <section id="works" class="wrapper style2">
      <div class="container">
        <ul>
            <li v-for="item in images">
                <img :src="URL + item" alt="item">
            </li>
        </ul>
      </div>
      <ac-footer></ac-footer>
    </section>
</template>
<style scoped>
    #works ul {
        padding:0;
        list-style-type:none;
        text-align:center;
    }
    #works  li {
        display: inline-block;
        list-style-type: none;
        padding-right: 20px;
        vertical-align: middle;
        width: 360px;
    }
    #works li img{
        width: 360px;
        height: 247px;
        cursor: pointer;
    }
</style>
