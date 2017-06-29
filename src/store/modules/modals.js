export default () => ({
  namespaced: true,
  state: {
    stack: []
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
