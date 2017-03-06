<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import AcFooter from '@/components/Footer'

    Vue.use(VueResource)

    export default {
        methods:{
            sendMessage(events){
                events.preventDefault()
                Vue.http.post('http://localhost:5000/sendmail', this.contact).then((response) => {

                  // get status
                  response.status;

                  // get status text
                  response.statusText;

                  // get all headers
                  response.headers;

                  // get 'Expires' header
                  response.headers['Expires'];

                  // set data on vm
                  //this.$set('error', response.json())

                  this.message = 'E-mail enviado com sucesso!';
                  this.isVisible = true;

              }, (error) => {
                  this.message = error.body;
                  this.isVisible = true;
              });
            }
        },
        data(){
            return {
                message: '',
                isVisible: false,
                contact: {}
            }
        },
        component: {
          AcFooter
        }
}
</script>

<template>
    <!-- Footer -->
    <div id="footer">
        <div class="container">
            <div class="row">
                <section class="6u 12u(narrower) 12u$(mobilep)">
                    <h3>Nossa Localização, venha fazer um orçamento</h3>
                    <p><b>Endereço:</b> Rua Rezala Simão, 1109</p>
                    <img src="http://maps.google.com/maps/api/staticmap?center=-25.470837,
                                              -49.318482&amp;zoom=15&amp;size=460x230&amp;markers=color:red%7Clabel:%7C-25.470837,
                                              -49.318482&amp;sensor=false"
                         alt="Mapa">

                </section>
                <section class="6u 12u(narrower)">
                    <div :class="{ 'ac-modal-show': isVisible, 'ac-modal-hide': !isVisible}"><h3>{{message}}</h3></div>
                    <h3>Contato</h3>
                    <form>
                        <div class="row 50%">

                            <input type="hidden" name="title" id="title"  v-model="contact.title"/>

                            <div class="6u 12u(mobilep)">
                                <input type="text" name="name" id="name" placeholder="Nome" v-model="contact.name"/>
                            </div>
                            <div class="6u 12u(mobilep)">
                                <input type="email" name="email" id="email" placeholder="E-mail" v-model="contact.email"/>
                            </div>

                        </div>

                        <div class="row 50%">
                            <div class="12u">
                                <textarea name="message" id="message" placeholder="Mensagem" rows="5" v-model="contact.message"></textarea>
                            </div>
                        </div>

                        <div class="row 50%">
                            <div class="12u">
                                <ul class="actions">
                                    <li><button class="button" v-on:click="sendMessage">Enviar</button></li>
                                </ul>
                            </div>
                        </div>

                    </form>
                </section>
            </div>
        </div>

        <ac-footer></ac-footer>

    </div>

</template>

<style scoped>
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
</style>
