import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'Trabalhos',
      component: Work
    },
    {
      path: '/contact',
      name: 'Contato',
      component: Contact
    }
  ]
})
