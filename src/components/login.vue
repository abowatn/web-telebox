<template>
	 <section id="divCenter"  class="6u 12u(narrower) center" :class="{ 'ac-login-show': isVisible, 'ac-login-hide': !isVisible}">
      <h3>Login</h3>
      <form>
          <div class="row 50%">
              <div class="6u 12u(mobilep)">
                  <input type="text" name="username" id="username" placeholder="Usuário" v-model="auth.username"/>
              </div>
          </div>
          <div class="row 50%">
              <div class="6u 12u(mobilep)">
                  <input type="password" name="password" id="password" placeholder="Senha" v-model="auth.password"/>
              </div>
          </div>

          <div class="row 50%">
              <div class="12u">
                  <ul class="actions">
                      <li><button class="button" v-on:click="authentication">Enviar</button></li>
                  </ul>
              </div>
          </div>

      </form>
    </section>
</template>

<script type="text/javascript">
    import Vue from 'vue'
    import VueResource from 'vue-resource'

    Vue.use(VueResource)

	export default{
		methods: {
            authentication(events){
                events.preventDefault()
                this.isVisible = true;

                Vue.http.post('http://localhost:5000/login', this.auth).then((response) => {

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

              }, (error) => {
                  console.log(error);
              });


            }
        },
        data () {
            return {
                auth:{ },
            }
        },

	}
</script>

<style type="text/css" scoped>
  
</style>
