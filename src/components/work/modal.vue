<script>
    export default{

        props:['title', 'width', 'height', 'name', 'footer'],

        computed:{
            style(){
                let str =
                        `
                            width: ${this.width}px;
                            height: ${this.height}px;
                            margin-left: -${this.width/2}px;
                            margin-top: -${this.height/2}px;
                        `
                return str
            }
        },

        data(){
            return {
                isVisible: false
            }
        },
        methods:{
            open(obj){
                if (obj.modal == this.name){
                    this.isVisible = true
                    this.$dispatch('modal-open', {modal: this.name})
                }
            },
            close(){
                this.isVisible = false
                this.$dispatch('modal-closed', {modal: this.name})
            }
        },
        events:{
            'open-modal'(obj){
                this.open(obj)
            }
        }
    }
</script>
<template>
    <div>
        <div class="ac-overlay" @click="close" :class="{ 'ac-modal-show': isVisible, 'ac-modal-hide': !isVisible}"></div>
        <div :style="style" class="ac-modal"   :class="{ 'ac-modal-show': isVisible, 'ac-modal-hide': !isVisible}">
            <div  class="ac-modal-header">
                <h4>{{ title }}</h4>
                <span class="ac-modal-close" @click="close">x</span>
            </div>
            <div  class="ac-modal-body">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .ac-modal-close{
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 6px;
    }

    .ac-modal-show{
        opacity: 1;
        transition: opacity 400ms ease-in-out;
        z-index: 10000;
    }
    .ac-modal-hide{
        opacity: 0;
        transition: opacity 400ms ease-in-out z-index 1s;
        z-index: -10000;
    }

    .ac-overlay{
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .ac-modal {
        background-color: #f4f4f4;
        border-bottom: #aaa 1px solid;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 6px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)
    }
    .ac-modal-header h4{
        margin: 0;
        padding: 0 10px 0 10px;
    }
    .ac-modal-header{
        border-bottom: #aaa 1px solid;
        padding: 10px 0 10px 0;
    }
    .ac-modal-body{
        padding: 15px;
    }
    .ac-modal-footer{
        border-top: #aaa 1px solid;
        padding: 10px 0 10px 0;
        position:absolute;
        bottom:0;
        width:100%;
        height:60px;   /* Height of the footer */
        background:#ddd;
    }
</style>