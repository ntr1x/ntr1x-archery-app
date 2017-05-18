import Vue from 'vue'

export default {
  name: 'as-outline-item',
  props: {
    item: Object,
    level: Number
  },
  data () {
    return {
      descriptor: null,
      open: this.level < 3
    }
  },
  created () {
    let component = Vue.component(this.item.name)
    this.descriptor = {
      title: (component && component.options.title) || `<${this.item.name} />`,
      icon: (component && component.options.icon) || 'fa fa-cube'
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
