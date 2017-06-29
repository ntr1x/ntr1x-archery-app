export default () => ({
  namespaced: true,
  state: {
    stack: [
      {
        factory: () => require('@/modals/Expression/Expression.vue')
      }
    ]
  },
  mutations: {
    'open': (state, modal) => {
      state.stack.push(modal)
    },
    'close': (state) => {
      state.stack.pop()
    }
  }
})
