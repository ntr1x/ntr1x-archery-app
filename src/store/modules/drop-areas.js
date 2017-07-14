import uniqid from 'uniqid'

export default () => ({
  namespaced: true,
  state: {
    stack: [
    ]
  },
  mutations: {
    'update': (state, collection) => {
      state.stack = collection.map((item) => ({
        id: uniqid(),
        mode: item.mode,
        area: item.area,
        bounds: item.bounds,
        children: item.children
      }))
    }
  }
})
