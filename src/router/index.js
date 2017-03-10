import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Admin from '@/components/Admin'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
