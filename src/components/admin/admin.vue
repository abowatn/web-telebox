<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import VcModal from './modal.vue'
    import VcFileUpload from './file-upload/main.vue'
    import AcPagination from '../pagination.vue'
    import AcLogin      from '../login.vue'

    Vue.use(VueResource)

    export default {
        components: { VcModal, VcFileUpload, AcPagination, AcLogin },
        ready () {
            this.fileModal.width = (window.innerWidth - 100)
            this.fileModal.height = (window.innerHeight - 100)
            Vue.http.get('http://localhost:5000/emails?page=1&npp=2', {page: 1, npp: 2}).then((response) => {
                this.items = response.data.results[0];
                this.pagination = response.data.pagination;
            }, (error) =>{
                console.log(error)
            });
        },
        methods: {
            openModal () {
                this.$broadcast('open-modal', { modal: 'file-upload-modal'})
            },
            navigate(page){
                Vue.http.get('http://localhost:5000/emails?page=' + page + '&npp=2', {page: page, npp: 2}).then((response) => {
                    this.items = response.data.results[0];
                    this.pagination = response.data.pagination;
                }, (error) =>{
                    console.log(error)
                });
            },
            authentication(){
                console.log('aaa');
                this.$broadcast('open-modal', { modal: 'file-upload-modal'});
            }
        },
        data () {
            return {
                fileModal: {
                    width: 0,
                    height: 0,
                },
                items: '',
                auth:{ },
                pagination: { },
                isVisible: true,
            }
        },
    }
</script>

<template>

  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="image is-4by3">
        <img src="http://bulma.io/images/placeholders/1280x960.png">
      </p>
    </div>
    <button class="modal-close"></button>
  </div>

    <ac-login></ac-login>

    <section>
        <section class="wrapper style1">
            <div class="container">
                <div class="row 200%">
                    <section class="12u 12u(narrower)">
                        <h2>Subir imagens</h2>
                        <vc-modal
                              title="File Upload"
                              :width="fileModal.width" :height="fileModal.height"
                              name="file-upload-modal">
                              <vc-file-upload></vc-file-upload>
                        </vc-modal>
                        <a href="#" @click.prevent="openModal"><i class="fa fa-cloud-upload fa-5x" aria-hidden="true"></i></a>
                    </section>
                </div>
            </div>
        </section>
        <hr/>
        <section class="wrapper style1">
            <div class="container">
                <div class="row 200%">
                    <section class="12u 12u(narrower)">
                        <h2>Emails Enviados</h2>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th class="col-sm-1"><b>ID</b></th>
                                    <th class="col-sm-1"><b>E-mail</b></th>
                                    <th class="col-sm-6"><b>Mensagem</b></th>
                                </tr>
                            </thead>
                            <tbody v-for="item in items">
                                <tr>
                                    <td>{{item.id}}</td>
                                    <td>{{item.email}}</td>
                                    <td>{{item.message}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
            <div class="text-center">
                <ac-pagination :source="pagination" @navigate="navigate"></ac-pagination>
            </div>
        </section>

    </section>

</template>

<style scoped>
    .ac-admin-close{
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 6px;
    }

    .ac-admin-show{
        opacity: 1;
        transition: opacity 400ms ease-in-out;
        z-index: 10000;
    }
    .ac-admin-hide{
        opacity: 0;
        transition: opacity 400ms ease-in-out z-index 1s;
        z-index: -10000;
    }


    a:link {
        text-decoration:none;
        text-align: center;
    }
    a:visited {
        text-decoration:none;
    }
    a:hover {
        text-decoration:underline;
    }
    table {
        width: 97%;
    }
</style>
