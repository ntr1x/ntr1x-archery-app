// import Vue from 'vue'

import { mapState } from 'vuex'
import { getDescription, getPath, getCategories } from '@/engine/model'

import AsCategory from './AsCategory.vue'

export default {
  name: 'as-properties',
  components: {
    AsCategory
  },
  computed: {
    ...mapState({
      model: state => state.designer.selection,
      description: state => getDescription(state.designer.selection),
      path: state => getPath(state.designer.selection).map(el => getDescription(el)),
      categories: state => getCategories(state.designer.selection)
    })
  }
}
