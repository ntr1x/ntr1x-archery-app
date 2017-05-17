import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import VueMaterial from 'vue-material'

import ArcheryShell from '@/components'
import ArcheryWidgets from '@/widgets'
import RouterFactory from '@/router'
import StoreFactory from '@/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'

// import 'vue-material/dist/vue-material.css'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(VueMaterial)

Vue.use(ArcheryWidgets)
Vue.use(ArcheryShell)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: RouterFactory(),
  store: StoreFactory(),
  template: '<as-app/>'
})
