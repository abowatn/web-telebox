<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import Gallery from '../photo.vue'
    import VcModal from './modal.vue'

    Vue.use(VueResource)

    let total = 0;

    export default {
        ready () {
            Vue.http.get('http://localhost:5000/images').then(
                (response) => {
                    total = response.data.length;
                    this.images = response.data;
                }, (error) =>{
                    console.log(error)
                }
            );
        },
        data(){
            return {
                images: '',
                URL: 'http://localhost:5000/',
                src: '',
            }
        },
        components: {
            Gallery, 
            VcModal
        },
        methods:{
        listen:function(data){
            this.msg = data
        },
        openModal (ev, image) {
            console.log(image);
            //this.$broadcast('open-modal', { modal: 'file-upload-modal'})
        },
      }
    }

</script>

<template>
    <section id="works" class="wrapper style2">
      <div class="container">
        <ul>
            <li v-for="item in images">
                <img :src="URL + item" alt="item" @click.prevent="openModal">
            </li>
        </ul>
      </div>
    </section>
    <vc-modal
            title="File Upload"
            :width="600" :height="600"
            name="file-upload-modal">
        <gallery></gallery>
    </vc-modal>

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
