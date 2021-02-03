import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Login from './components/Login.vue'


Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

export default router;