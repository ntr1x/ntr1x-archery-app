import Vuex from 'vuex'

import DesignerStore from './modules/designer'

export default () => new Vuex.Store({
  strict: true,
  modules: {
    designer: DesignerStore({
      uid: () => Math.random().toString(36).substr(2, 8)
    })
  }
})
