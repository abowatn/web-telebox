<script>
  import AcFooter from '@/components/Footer'
  export default {
    name: 'home',
    components: {
      AcFooter
    }
  }
</script>
<template>
  <section id="home">
    <!-- Banner -->
    <section id="banner">
        <header>
            <h2>Trabalhos: <em>Coheça mais sobre nossos trabalhos</em></h2>
            <a router-link="{ path: '/work' }" class="button">Mais</a>
        </header>
    </section>
    <section class="wrapper style1">
        <div class="container">
            <div class="row 200%">
                <section class="4u 12u(narrower)">
                    <div class="box highlight">
                        <i class="icon major fa-group"></i>
                        <h3>Empresa</h3>
                        <p>A Telebox Curitiba foi fundada em 1990, atua no mercado de contrução civil. Conquistou solidez e credibilidade ao longo dos anos. A úlima alteração da marca foi feita em 2011 e portanto essa atualização teve como objetivo modernizar o logo, preservando sua história construída ao longo de 24 anos, posicionando-a como uma empresa sólida, consolidadda no mercado e que acompanha a evolução dos tempos e suas tendências.</p>
                    </div>
                </section>
                <section class="4u 12u(narrower)">
                    <div class="box highlight">
                        <i class="icon major fa-building"></i>
                        <h3>Produtos</h3>
                        <p>Para manter a qualidade e a relação custo x benefício dos produtos, a empresa tem em uma estrutura com software e equipamentos de última geração para agilizar o desenvolvimento e processos de fabricação. Todos os modelos são desenvolvidos através de pesquisas que visam a alta performance, durabilidade e diferenciação no design, São várias etapas. Todas fundamentais para alcançar um produto final diferenciado.</p>
                    </div>
                </section>
                <section class="4u 12u(narrower)">
                    <div class="box highlight">
                        <i class="icon major fa-phone"></i>
                        <h3>Orçamento</h3>
                        <p>A Telebox Curitiba se coloca à disposição para lhe atender e fornecer serviços de qualidade para a sua empresa. Você pode solicitar um orçamento gratuitamente e nós entramos em contato logo em seguida!</p>
                    </div>
                </section>
            </div>
        </div>
    </section>
    <ac-footer></ac-footer>
  </section>
</template>
