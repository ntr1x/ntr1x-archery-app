import uniqid from 'uniqid'

export default () => ({
  namespaced: true,
  state: {
    panels: {
      palette: { open: true },
      outline: { open: true },
      properties: { open: true },
      structure: { open: true },
      console: { open: true }
    },
    dimensions: { name: 'pc', position: 'absolute', width: '100%', height: '100%' },
    scale: 1,
    portal: {
      pages: [
        { id: uniqid(), route: '/', title: 'Default' },
        { id: uniqid(), route: '/offers', title: 'Offers' },
        { id: uniqid(), route: '/offer/:offer', title: 'Offer Details' }
      ]
    }
    // page: {
    //   children: []
    // },
    // selection: null
  },
  mutations: {
    'panels/toggle': (state, { name }) => {
      state.panels[name].open = !state.panels[name].open
    },
    'viewport/dimensions': (state, dimensions) => {
      state.dimensions = dimensions
    },
    'viewport/zoom': (state, scale) => {
      if (scale > 0.2) {
        state.scale = scale
      }
    },
    'pages/update': (state, pages) => {
      state.portal.pages = pages
    }
    // 'designer/select': (state, element) => {
    //   state.selection = element
    // },
    // 'designer/widgets/create': (state, { parent, widget }) => {
    //   // widget.uid = randomUID()
    //   widget.parent = parent
    //   // parent.children.push(fixModel(widget))
    // },
    // 'designer/widgets/property': (state, { widget, model, name, property: { strategy, value, expression } }) => {
    //   // widget.uid = randomUID()
    //   Object.assign(model.props[name], model[name], { strategy, value, expression })
    // }
  },
  actions: {
    'pages/create': async ({ state, commit }, { route, title }) => {
      if (state.portal.pages.find((page) => page.route === route)) {
        throw new Error('Cannot create page: duplicate route')
      }
      commit('pages/update', [
        ...state.portal.pages, {
          id: uniqid(),
          route,
          title
        }
      ])
    },
    'pages/update': async ({ state, commit }, { id, route, title }) => {
      if (state.portal.pages.find((page) => page.route === route && page.id !== id)) {
        throw new Error('Cannot update page: duplicate route')
      }
      commit('pages/update', state.portal.pages.map(page => page.id !== id ? page
        : {
          id: uniqid(),
          route,
          title
        }
      ))
    },
    'pages/remove': async ({ state, commit }, { id }) => {
      if (!state.portal.pages.find((page) => page.id === id)) {
        throw new Error('Cannot remove page: unknown page ID')
      }
      commit('pages/update', state.portal.pages.filter(page => page.id !== id))
    }
    // 'designer/setup': ({ state, commit }) => {
    //   commit('designer/widgets/create', {
    //     parent: state.page,
    //     widget: {
    //       name: 'aw-canvas',
    //       props: { width: { value: '300px' }, height: { value: '400px' } },
    //       children: []
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0],
    //     widget: {
    //       name: 'aw-text',
    //       props: { width: { value: '200px' }, height: { value: 'auto' } }
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0],
    //     widget: {
    //       name: 'aw-stack',
    //       props: { type: { value: 'horizontal' } },
    //       children: []
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0].children[1],
    //     widget: {
    //       name: 'aw-text',
    //       props: { width: { value: '200px' }, height: { value: 'auto' } }
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0].children[1],
    //     widget: {
    //       name: 'aw-text',
    //       props: { width: { value: '300px' }, height: { value: 'ato' } }
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0],
    //     widget: {
    //       name: 'aw-stack',
    //       props: { type: { value: 'horizontal' } },
    //       children: []
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0].children[2],
    //     widget: {
    //       name: 'aw-text',
    //       props: { width: { value: '200px' }, height: { value: '100px' } }
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0].children[2],
    //     widget: {
    //       name: 'aw-text',
    //       props: { width: { value: '300px' }, height: { value: '50%' } }
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0].children[2],
    //     widget: {
    //       name: 'aw-text',
    //       props: { width: { value: '20px' }, height: { value: '75%' } }
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0],
    //     widget: {
    //       name: 'aw-text',
    //       props: { width: { value: '200px' }, height: { value: 'auto' } }
    //     }
    //   })
    //   commit('designer/widgets/create', {
    //     parent: state.page.children[0],
    //     widget: {
    //       name: 'aw-text',
    //       props: { width: { value: '200px' }, height: { value: 'auto' } }
    //     }
    //   })
    // }
  }
})
