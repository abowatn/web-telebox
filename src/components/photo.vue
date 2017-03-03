<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'

    export default{
        data() {
            return {
                currentNumber: 0,
                timer: null,
                images: '',
                URL: 'http://localhost:5000/'
            }
        },

        ready() {
            this.startRotation();
            Vue.http.get('http://localhost:5000/images').then(
                (response) => {
                    this.images = response.body;
                }, (error) =>{
                    console.log(error)
                }
             );

        },

        methods: {
            startRotation() {
                //this.timer = setInterval(this.next, 3000)
            },
            openModal () {
                this.$broadcast('open-modal', { modal: 'file-upload-modal'})
            },
            stopRotation() {
                clearTimeout(this.timer);
                this.timer = null;
            },

            next()  {
                this.currentNumber += 1
            },
            prev: function() {
                this.currentNumber -= 1
            }
        }
    }
</script>
<template>
    <image-slider>
        <p>
            <a @click="prev">Previous</a> || <a @click="next">Next</a>
        </p>

        <div
                v-for="number in [currentNumber]"
                transition="fade"
        >
            <img
                    :src="images[Math.abs(currentNumber) % images.length]"
                    :mouseover="stopRotation"
                    :mouseout="startRotation"
            />
        </div>
    </image-slider>
</template>

<style>
    .fade-transition {
        transition: all 0.8s ease;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        position: absolute;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
        visibility: hidden;
    }
</style>