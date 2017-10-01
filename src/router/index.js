import VueRouter from 'vue-router'

export default () => new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('src/components/shell/Shell/Shell.vue')
    }
  ]
})
