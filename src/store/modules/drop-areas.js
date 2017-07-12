import uniqid from 'uniqid'

export default () => ({
  namespaced: true,
  state: {
    stack: [
    ]
  },
  mutations: {
    'enter': (state, area) => {
      // state.stack.pop()
      state.stack.push({
        id: uniqid(),
        area
      })
      console.log(JSON.stringify(state.stack))
    },
    'leave': (state) => {
      state.stack.shift()
    }
  }
})
