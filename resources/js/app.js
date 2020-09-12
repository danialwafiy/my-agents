/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//Vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const routes = [
    {path:'/',component: require('./components/pages/Home.vue').default},
    {path:'/agents',component: require('./components/pages/Agents.vue').default},
    {path:'/orders',component: require('./components/pages/Orders.vue').default},
    {path:'/orders/new',component: require('./components/pages/NewOrder.vue').default},

]
const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.component('app-main', require('./components/layouts/Default.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
