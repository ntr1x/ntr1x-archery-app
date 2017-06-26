import Vuex from 'vuex'

import DesignerStore from './modules/designer'
import ModalsStore from './modules/modals'

export default () => new Vuex.Store({
  strict: true,
  modules: {
    designer: DesignerStore(),
    modals: ModalsStore()
  }
})
