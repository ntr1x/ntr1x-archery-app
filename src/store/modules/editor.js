import { dropAreas, selectedEntries, innerBounds, outerBounds } from 'src/engine/editor'

export default () => {
  return {
    namespaced: true,
    state: {
      cursor: null,
      editor: null,
      content: null,
      innerBounds: null,
      outerBounds: null,
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
      'innerBounds': (state, innerBounds) => {
        state.innerBounds = innerBounds
      },
      'outerBounds': (state, outerBounds) => {
        state.outerBounds = outerBounds
      },
      'dropAreas': (state, areas) => {
        state.dropAreas = areas
      },
      'selectedEntries': (state, selectedEntries) => {
        state.selectedEntries = selectedEntries
      }
    },
    actions: {
      editor: ({ state, commit }, { editor, content }) => {
        commit('editor', editor)
        commit('content', content)
        commit('dropAreas', [])
        commit('innerBounds', editor && content && innerBounds(editor, content) || null)
        commit('outerBounds', editor && outerBounds(editor) || null)
      },
      scroll: ({ state, commit }) => {
        commit('innerBounds', state.editor && state.content && innerBounds(state.editor(), state.content()) || null)
        commit('outerBounds', state.editor && outerBounds(state.editor()) || null)
        commit('dropAreas', [])
        commit('selectedEntries', selectedEntries(state.selection))
      },
      select: ({ state, commit, dispatch }, widget) => {
        commit('dropAreas', [])
        commit('selectedEntries', selectedEntries(widget))
        commit('selection', widget)
      },
      dragstart: ({ state, commit, dispatch }, e) => {
        e.dataTransfer.setData('application/x-widget', `123`)
        // e.dataTransfer.setData('application/x-widget', `${this.category.name}.${this.item.name}`)
      },
      dragend: ({ state, commit, dispatch }, e) => {
        commit('dropAreas', [])
      },
      dragenter: ({ state, commit, dispatch }, e) => {
        commit('dropAreas', dropAreas(e.target, {
          x: e.clientX,
          y: e.clientY
        }))
      },
      dragleave: ({ state, commit, dispatch }, e) => {
      },
      dragout: ({ state, commit, dispatch }, e) => {
        commit('dropAreas', [])
      },
      dragover: ({ state, commit, dispatch }, e) => {
        e.preventDefault()
        commit('dropAreas', dropAreas(e.target, {
          x: e.clientX,
          y: e.clientY
        }))
      },
      drop: ({ state, commit, dispatch }, e) => {
        e.preventDefault()
        commit('dropAreas', [])
      }
    }
  }
}
