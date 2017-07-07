import { mapMutations } from 'vuex'
import * as controls from '@/components/controls'

export default {
  components: { ...controls },
  props: {
    widget: Object,
    property: Object
  },
  data: () => ({
    value: null
  }),
  created () {
    // this.value = this.property.default || null
  },
  methods: {
    ...mapMutations({
      toggle: 'designer/panels/toggle',
      modal: 'modals/open'
    }),
    handleInput (value) {
      this.value = value
    },
    edit () {
      this.modal({
        factory: () => require('@/modals/Expression/Expression.vue')
      })
    }
  }
}
