<script>

export default {
  name: 'proxy',
  props: {
    component: {
      type: [ String, Object, Function ]
    },
    model: Object
  },
  render (createElement) {
    return createElement(this.component, {
      props: this.model
    })
  }
}

</script>
