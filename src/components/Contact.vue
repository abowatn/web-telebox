<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import AcFooter from '@/components/Footer'

    Vue.use(VueAxios, axios)

    export default {
      name: 'Contato',
      methods: {
        sendMessage (events) {
          events.preventDefault()
          console.log(this.contact)
          Vue.axios.post('http://localhost:5000/sendmail', this.contact).then((response) => {
            response.status
            response.statusText
            response.headers
            response.headers['Expires']
            this.message = 'E-mail enviado com sucesso!'
            this.isVisible = true
          }).catch(e => {
            console.log(e)
          })
        }
      },
      components: {
        AcFooter
      },
      data () {
        return {
          message: '',
          isVisible: false,
          contact: {}
        }
      }
    }
</script>

<template>
    <section>
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
  </section>
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
