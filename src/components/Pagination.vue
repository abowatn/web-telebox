<script>
  import { range } from 'lodash'
  export default {
    props: [
      'source'
    ],
    data () {
      return {
        pages: []
      }
    },
    methods: {
      navigate (ev, page) {
        ev.preventDefault()
        this.$dispatch('navigate', page)
      },
      nextPage (ev, page) {
        if (page === 0 || page === this.source.totalPages + 1) {
          return
        }
        ev.preventDefault()
        this.navigate(ev, page)
      }
    },
    watch: {
      source () {
        this.pages = range(1, this.source.totalPages + 1)
      }
    }
  }
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li :class="{ disabled: source.current == 1 }">
        <a href="#" @click="nextPage($event, source.current - 1)" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="page in pages" :class="{active: (source.current)== page}">
          <a href="#" @click="navigate($event,page)">{{page}}</a>
      </li>
      <li :class="{ disabled: source.current == source.totalPages }">
        <a href="#" @click="navigate($event, source.current + 1)" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style type="text/css" scoped>

</style>
