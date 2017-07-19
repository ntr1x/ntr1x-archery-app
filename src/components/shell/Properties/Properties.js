import { mapState, mapMutations } from 'vuex'
import * as controls from '@/components/controls'
import Property from './Property.vue'
import Category from '../Category/Category.vue'
import { debounce } from 'lodash'

export default {
  created () {
    this.updatePropertyDebounced = debounce(this.updateProperty, 500)
  },
  components: {
    ...controls,
    Property,
    Category
  },
  computed: {
    ...mapState({
      widget: (state) => state.editor.selection,
      propsCategories: (state) => state.editor.selection && state.editor.selection.propsCategories()
    })
  },
  methods: {
    ...mapMutations({
      toggle: 'designer/panels/toggle',
      updateProperty: 'designer/widgets/property',
      modal: 'modals/open'
    }),
    edit () {
      this.modal({
        factory: () => require('@/modals/Expression/Expression.vue')
      })
    },
    handlePropertyChange ({ name, value, type }) {
      this.updatePropertyDebounced({ widget: this.widget, type, name, value })
    }
  }
}
