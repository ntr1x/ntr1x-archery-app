import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import RouterFactory from 'src/router'
import StoreFactory from 'src/store'

import App from 'src/App'

import { buildPortal } from 'src/engine/runtime'
import { structure, registry } from 'src/mock/portal0.mock'

import 'material-design-icons/iconfont/material-icons.css'
import 'source-sans-pro/source-sans-pro.css'
import 'src/styles/themes/default.scss'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuelidate)
// Vue.use(VueMaterial)

// Vue.use(ArcheryWidgets)
// Vue.use(ArcheryShell)

Vue.config.productionTip = false

let store = StoreFactory()
let router = RouterFactory()

const portal = buildPortal(structure, registry, {})

store.commit('designer/pages/portal', portal)

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
