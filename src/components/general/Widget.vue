<script>

export default {
  name: 'proxy',
  props: {
    model: Object
  },
  beforeCreate () {
    this.$options.components.Proxy = require('./Proxy.vue')
  },
  render (createElement) {

    const model = this.model
    const node = this.model.node({})

    const scopedSlots = !model.slots
      ? undefined
      : Object.entries(model.slots).reduce((target, [name, slot]) => {
        target[name] = (scopedProps) => slot.map(
          (m) => createElement('proxy', {
            props: {
              model: m
            }
          })
        )
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
