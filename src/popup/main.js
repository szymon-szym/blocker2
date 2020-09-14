import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../styles/custom.scss"
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
