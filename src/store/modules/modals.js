export default () => ({
  state: {
    stack: []
  },
  mutations: {
    'modals/open': (state, modal) => {
      state.stack.push(modal)
    },
    'modals/close': (state) => {
      state.stack.pop()
    }
  }
})
