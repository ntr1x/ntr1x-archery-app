<script>
import { mapActions } from 'vuex'

export default {
  name: 'widget',
  abstract: true,
  props: {
    model: Object,
    runtimeContext: Function
  },
  render (createElement) {

    const context = this.runtimeContext ? this.runtimeContext() : undefined

    const model = this.model
    const node = this.model.node(context)

    const scopedSlots = !model.slots
      ? undefined
      : Object.entries(model.slots).reduce((target, [name, slot]) => {
        target[name] = (scopedProps) => {
          return slot.map(
            (m) => createElement('widget', {
              props: {
                model: m,
                runtimeContext: () => ({
                  ...context,
                  ...scopedProps
                })
              }
            })
          )
        }
        return target
      }, {})

    return createElement(node.component, {
      key: model.id,
      props: node.propsData,
      scopedSlots,
      attrs: {
        'data-widget-id': this.model.id
      },
      nativeOn: {
        click: (e) => {
          e.stopPropagation()
          this.select(model)
        }
      }
    })
  },
  methods: {
    ...mapActions({
      select: 'editor/select'
    })
  }
}

</script>
