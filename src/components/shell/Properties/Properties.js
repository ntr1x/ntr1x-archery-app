import { mapState, mapMutations, mapActions } from 'vuex'
import * as controls from '@/components/controls'
import Property from './Property.vue'
import Category from '../Category/Category.vue'
import { debounce } from 'lodash'

export default {
  created () {
    this.updatePropertyDebounced = debounce(this.updateProperty, 400)
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
    ...mapActions({
      updateWidgetProperty: 'designer/widgets/property',
      selectWidget: 'editor/select'
    }),
    ...mapMutations({
      toggle: 'designer/panels/toggle',
      modal: 'modals/open'
    }),
    edit () {
      this.modal({
        factory: () => require('@/modals/Expression/Expression.vue')
      })
    },
    async updateProperty ({ name, value, type }) {
      await this.updateWidgetProperty({ widget: this.widget, type, name, value })
      this.$nextTick(() => {
        this.selectWidget(this.widget)
      })
    },
    handlePropertyChange ({ name, value, type }) {
      this.updatePropertyDebounced({ widget: this.widget, type, name, value })
    }
  }
}
