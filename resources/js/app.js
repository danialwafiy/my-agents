require('./bootstrap');

window.Vue = require('vue');
Vue.config.productionTip = false

//Vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const routes = [
    {path:'/',component: require('./components/pages/Home.vue').default},
    {path:'/agents',component: require('./components/pages/Agents.vue').default},
    {path:'/orders',component: require('./components/pages/Orders.vue').default},
    {path:'/orders/new',component: require('./components/pages/NewOrder.vue').default},
    {path:'/login',component: require('./components/pages/Login.vue').default},
]
const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.component('app-main', require('./components/layouts/Default.vue').default);

import swal from 'sweetalert2';
window.swal = swal;

const Toast = swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background:'#1A202C',
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
})
window.toast = Toast;

//Vuex
import {store} from "./store/store"

const app = new Vue({
    el: '#app',
    router,
    store
});
