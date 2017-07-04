import uniqid from 'uniqid'
import * as pages from './designer-pages.js'
import * as props from './designer-props.js'

const pagesStub = [
  {
    id: uniqid(),
    route: '/',
    title: 'Default',
    props: [
      {
        name: 'fontSize',
        title: 'Font Size',
        type: 'String'
      },
      {
        name: 'fontWeight',
        title: 'Font Weight',
        type: 'String'
      }
    ]
  },
  { id: uniqid(), route: '/offers', title: 'Offers' },
  { id: uniqid(), route: '/offer/:offer', title: 'Offer Details' }
]

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
      pages: pagesStub
    },
    selected: {
      page: pagesStub[0]
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
      state.selected.page = pages.find((page) => page.route === state.selected.page && state.selected.page.route) || null
    },
    'pages/select': (state, page) => {
      state.selected.page = page
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

    'pages/create': pages.create,
    'pages/update': pages.update,
    'pages/remove': pages.remove,

    'props/create': props.create,
    'props/update': props.update,
    'props/remove': props.remove

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
