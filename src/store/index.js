import Vuex from 'vuex'

import DesignerStore from './modules/designer'
import EditorStore from './modules/editor'
import ModalsStore from './modules/modals'

export default () => new Vuex.Store({
  strict: true,
  modules: {
    designer: DesignerStore(),
    editor: EditorStore(),
    modals: ModalsStore()
  }
})
