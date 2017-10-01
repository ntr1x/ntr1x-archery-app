import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import designerStore from './modules/designer'
import editorStore from './modules/editor'
import modalsStore from './modules/modals'

export default () => new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState({
      key: '11',
      paths: [
        'designer.panels',
        'designer.dimensions',
        'designer.scale'
      ]
    })
  ],
  modules: {
    designer: designerStore(),
    editor: editorStore(),
    modals: modalsStore()
  }
})
