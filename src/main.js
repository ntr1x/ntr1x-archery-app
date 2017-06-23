import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import VueMaterial from 'vue-material'

// import ArcheryShell from '@/components'
// import ArcheryWidgets from '@/widgets'
import RouterFactory from '@/router'
import StoreFactory from '@/store'

import App from '@/App'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/themes/shell.scss'
// import 'bootstrap/dist/css/bootstrap-theme.min.css'

// import 'vue-material/dist/vue-material.css'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import 'font-awesome/css/font-awesome.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'source-sans-pro/source-sans-pro.css'
import '@/styles/themes/default.scss'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(VueMaterial)

// Vue.use(ArcheryWidgets)
// Vue.use(ArcheryShell)

Vue.config.productionTip = false

let store = StoreFactory()
let router = RouterFactory()

// store.dispatch('designer/setup')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app />',
  components: {
    App
  }
})
