import Vue from 'vue'

export default {
  name: 'as-widget',
  props: {
    name: String,
    props: Object
  },
  render (createElement) {
    let component = Vue.component(this.name)
    return createElement(component, {
      props: JSON.parse(JSON.stringify(this.props))
    })
  }
}
