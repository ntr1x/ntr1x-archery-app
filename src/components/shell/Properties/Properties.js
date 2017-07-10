import { mapState, mapMutations } from 'vuex'
import * as controls from '@/components/controls'
import Property from './Property.vue'
import uniqid from 'uniqid'

export default {
  components: {
    ...controls,
    Property
  },
  computed: {
    ...mapState({
      widget: (state) => state.designer.selected.widget,
      propsCategories: (state) => state.designer.selected.widget && state.designer.selected.widget.propsCategories()
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
      console.log({ name, value, type })
      this.updateProperty({ widget: this.widget, type, name, value })
    }
  }
}
