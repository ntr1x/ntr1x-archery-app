export default ({ uid }) => ({
  state: {
    panels: {
      top: {
        actions: true
      },
      bottom: {
        console: true
      },
      left: {
        palette: true,
        outline: true
      },
      right: {
        properties: true,
        structure: false
      }
    },
    page: {
      children: []
    },
    selection: null
  },
  mutations: {
    'designer/panel/toggle': (state, { name, pane }) => {
      state.panels[name][pane] = !state.panels[name][pane]
    },
    'designer/select': (state, element) => {
      state.selection = element
    },
    'designer/widgets/create': (state, { parent, widget }) => {
      widget.uid = uid
      widget.parent = parent
      parent.children.push(widget)
    }
  },
  actions: {
    'designer/setup': ({ state, commit }) => {
      commit('designer/widgets/create', {
        parent: state.page,
        widget: {
          name: 'aw-canvas',
          props: { width: '300px', height: '400px' },
          children: []
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0],
        widget: {
          name: 'aw-text',
          props: { width: '200px', height: 'auto' }
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0],
        widget: {
          name: 'aw-stack',
          props: { type: 'horizontal' },
          children: []
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0].children[1],
        widget: {
          name: 'aw-text',
          props: { width: '200px', height: 'auto' }
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0].children[1],
        widget: {
          name: 'aw-text',
          props: { width: '300px', height: 'auto' }
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0],
        widget: {
          name: 'aw-stack',
          props: { type: 'horizontal' },
          children: []
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0].children[2],
        widget: {
          name: 'aw-text',
          props: { width: '200px', height: '100px' }
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0].children[2],
        widget: {
          name: 'aw-text',
          props: { width: '300px', height: '50%' }
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0].children[2],
        widget: {
          name: 'aw-text',
          props: { width: '20px', height: '75%' }
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0],
        widget: {
          name: 'aw-text',
          props: { width: '200px', height: 'auto' }
        }
      })
      commit('designer/widgets/create', {
        parent: state.page.children[0],
        widget: {
          name: 'aw-text',
          props: { width: '200px', height: 'auto' }
        }
      })
    }
  }
})
