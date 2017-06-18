// import Vue from 'vue'

export default {
  name: 'as-proxy',
  props: {
    component: {
      type: [ String, Object, Function ]
    },
    model: Object
  },
  render (createElement) {
    // console.log('this.component', this.component, this.model)
    // let component = Vue.component(this.component)
    // console.log('proxy', component)
    return createElement(this.component, {
      props: this.model
    })
  }
}
