<script>
    export default {
      data () {
        return {
          fileModal: {
            width: 0,
            height: 0
          },
          items: ''
        }
      }
    }
</script>

<template>

    <section class="admin">
        <section class="wrapper style1">
            <div class="container">
                <div class="row 200%">
                    <section class="12u 12u(narrower)">
                        <h2>Subir imagens</h2>
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
