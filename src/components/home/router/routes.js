
import Home from '../home.vue'
import Admin from '../admin.vue'
import Contact from '../contact.vue'
import Dashboard from '../main.vue'
import Work from '../work.vue'

export default {
    '/home': {
        name: 'home',
        component: Home
    },
    '/admin': {
        name: 'admin',
        component: Admin
    },
    '/contact': {
        name: 'contact',
        component: Contact
    },
    '/admin': {
        name: 'dashboard',
        component: Dashboard
    },
    '/work': {
        name: 'work',
        component: Work
    },
    '/login': {
        name: 'login',
        component: Work
    },
}
