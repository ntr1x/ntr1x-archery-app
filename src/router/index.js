import VueRouter from 'vue-router'

import AsShell from '@/components/AsShell/AsShell.vue'

export default () => new VueRouter({
  routes: [
    {
      path: '/',
      component: AsShell
    }
  ]
})
