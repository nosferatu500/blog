// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import navbar from './components/navbar.vue'
import footer from './components/footer.vue'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

import VueCordova from 'vue-cordova'
Vue.use(VueCordova)

Vue.component('navbar', navbar)
Vue.component('footer-section', footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
