import { dropAreas, selectedEntries } from '@/engine/editor'

export default () => {
  return {
    namespaced: true,
    state: {
      counter: 0,
      editor: null,
      dropAreas: [],
      selection: null,
      selectedEntries: []
    },
    mutations: {
      'selection': (state, selection) => {
        state.selection = selection
      },
      'counter': (state, counter) => {
        state.counter = counter
      },
      'editor': (state, editor) => {
        state.editor = editor
          ? () => editor
          : null
      },
      'dropAreas': (state, areas) => {
        state.dropAreas = areas
      },
      'selectedEntries': (state, selectedEntries) => {
        state.selectedEntries = selectedEntries
      }
    },
    actions: {
      editor: ({ state, commit, dispatch }, editor) => {
        commit('editor', editor)
        commit('dropAreas', [])
        // commit('counter', 0)
      },
      scroll: ({ state, commit }) => {
        commit('dropAreas', [])
        commit('selectedEntries', selectedEntries(state.editor(), state.selection))
        // commit('counter', 0)
      },
      select: ({ state, commit, dispatch }, widget) => {
        commit('selectedEntries', selectedEntries(state.editor(), widget))
        commit('selection', widget)
      },
      dragstart: ({ state, commit, dispatch }, e) => {
        // e.dataTransfer.setData('application/x-widget', `${this.category.name}.${this.item.name}`)
      },
      dragend: ({ state, commit, dispatch }, e) => {
        console.log('dragend')
        commit('dropAreas', [])
      },
      dragenter: ({ state, commit, dispatch }, e) => {
        // commit('counter', state.counter + 1)
        commit('dropAreas', dropAreas(state.editor(), e.target))
      },
      dragleave: ({ state, commit, dispatch }, e) => {
        // commit('counter', state.counter - 1)
        // if (state.counter === 1) {
        //   commit('dropAreas', [])
        // }
      },
      mouseout: ({ state, commit, dispatch }, e) => {
        commit('dropAreas', [])
      },
      dragover: ({ state, commit, dispatch }, e) => {
        // if (state.counter) {
        e.preventDefault()
        // }
      },
      drop: ({ state, commit, dispatch }, e) => {
        e.preventDefault()
        // commit('counter', 0)
        commit('dropAreas', [])
      }
    }
  }
}
