import Vuex from 'vuex'

import DesignerStore from './modules/designer'
import DropAreasStore from './modules/drop-areas'
import ModalsStore from './modules/modals'

export default () => new Vuex.Store({
  strict: true,
  modules: {
    designer: DesignerStore(),
    dropAreas: DropAreasStore(),
    modals: ModalsStore()
  }
})
