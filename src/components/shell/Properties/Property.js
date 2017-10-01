import { mapMutations } from 'vuex'
import Expression from 'src/modals/Expression/Expression.vue'
import * as controls from 'src/components/controls'

export default {
  components: { ...controls },
  props: {
    type: String, // 'prop' | 'event'
    widget: Object,
    property: Object
  },
  data: () => ({
    value: null
  }),
  created () {

    const model = this.widget.model

    if (this.type === 'prop') {
      this.value = model.propsExpr && (this.property.name in model.propsExpr)
        ? model.propsExpr[this.property.name]
        : this.property.default || null
    }

    if (this.type === 'event') {
      this.value = model.eventsExpr && (this.property.name in model.eventsExpr)
        ? model.eventsExpr[this.property.name]
        : (this.property.default || null)
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'designer/panels/toggle',
      modal: 'modals/open'
    }),
    handleInput (value) {
      this.value = value
      this.$emit('change', {
        name: this.property.name,
        value,
        type: this.type
      })
    },
    edit () {
      this.modal({
        factory: () => Expression,
        data: {
          property: this.property,
          widget: this.widget,
          type: this.type,
          value: this.value
        }
      })
    }
  }
}
