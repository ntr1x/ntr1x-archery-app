import { dropAreas, selectedEntries } from '@/engine/editor'

export default () => {
  return {
    namespaced: true,
    state: {
      editor: null,
      content: null,
      dropAreas: [],
      selection: null,
      selectedEntries: []
    },
    mutations: {
      'selection': (state, selection) => {
        state.selection = selection
      },
      'editor': (state, editor) => {
        state.editor = editor
          ? () => editor
          : null
      },
      'content': (state, content) => {
        state.content = content
          ? () => content
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
      editor: ({ state, commit, dispatch }, { editor, content }) => {
        commit('editor', editor)
        commit('content', content)
        commit('dropAreas', [])
      },
      scroll: ({ state, commit }, e) => {
        commit('dropAreas', [])
        commit('selectedEntries', selectedEntries(state.content(), state.selection))
      },
      select: ({ state, commit, dispatch }, widget) => {
        commit('dropAreas', [])
        commit('selectedEntries', selectedEntries(state.content(), widget))
        commit('selection', widget)
      },
      dragstart: ({ state, commit, dispatch }, e) => {
        // e.dataTransfer.setData('application/x-widget', `${this.category.name}.${this.item.name}`)
      },
      dragend: ({ state, commit, dispatch }, e) => {
        commit('dropAreas', [])
      },
      dragenter: ({ state, commit, dispatch }, e) => {
        commit('dropAreas', dropAreas(state.content(), e.target))
      },
      dragleave: ({ state, commit, dispatch }, e) => {
      },
      dragout: ({ state, commit, dispatch }, e) => {
        commit('dropAreas', [])
      },
      dragover: ({ state, commit, dispatch }, e) => {
        e.preventDefault()
      },
      drop: ({ state, commit, dispatch }, e) => {
        e.preventDefault()
        commit('dropAreas', [])
      }
    }
  }
}
