import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import {routes} from "./routeConfig.js"
import VueRouter from 'vue-router'
import './assets/js/rem.js'

Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({
    routes
});
new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
