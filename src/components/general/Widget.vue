<script>
export default {
  name: 'widget',
  abstract: true,
  props: {
    model: Object,
    runtimeContext: Object
    // item: [Object, String, Number]
  },
  render (createElement) {

    const model = this.model
    const node = this.model.node(this.runtimeContext)

    const scopedSlots = !model.slots
      ? undefined
      : Object.entries(model.slots).reduce((target, [name, slot]) => {
        target[name] = (scopedProps) => {
          return slot.map(
            (m) => createElement('widget', {
              props: {
                model: m,
                runtimeContext: scopedProps
              }
            })
          )
        }
        return target
      }, {})

    return createElement(node.component, {
      key: model.id,
      props: node.propsData,
      scopedSlots
    })
  }
}

</script>
