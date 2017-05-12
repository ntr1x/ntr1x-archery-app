import VueRouter from 'vue-router'

import Shell from '@/components/Shell/Shell.vue'
import Hello from '@/components/Hello'

export default () => new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Shell',
      component: Shell
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
