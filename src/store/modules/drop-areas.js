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
        area: item.area,
        clip: item.clip
      }))
    }
  }
})
