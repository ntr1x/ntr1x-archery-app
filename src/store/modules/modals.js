import uniqid from 'uniqid'

export default () => ({
  namespaced: true,
  state: {
    stack: []
  },
  mutations: {
    'open': (state, modal) => {
      state.stack.push({
        id: uniqid(),
        modal
      })
    },
    'close': (state) => {
      state.stack.pop()
    }
  }
})
