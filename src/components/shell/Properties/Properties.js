import { mapState, mapMutations } from 'vuex'
import * as controls from '@/components/controls'
import Property from './Property.vue'

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
      modal: 'modals/open'
    }),
    edit () {
      this.modal({
        factory: () => require('@/modals/Expression/Expression.vue')
      })
    }
  }
}
