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
    console.log(this)

    this.$options.components['widget'] = this

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

    console.log(scopedSlots)

    return createElement(node.component, {
      props: node.propsData,
      scopedSlots
    })
  }
}

</script>
