import Vue from 'vue'

export default {
  name: 'as-outline-item',
  props: {
    item: Object
  },
  data () {
    return {
      descriptor: null
    }
  },
  created () {
    let component = Vue.component(this.item.name)
    this.descriptor = {
      title: (component && component.options.title) || `<${this.item.name} />`,
      icon: (component && component.options.icon) || 'fa fa-cube'
    }
  }
}
