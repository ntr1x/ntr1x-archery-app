import Vue from 'vue'
import * as pages from './designer-pages.js'
import * as props from './designer-props.js'

import { buildPortal } from '@/engine/runtime'
import { structure, registry } from '@/mock/portal0.mock'

import uniqid from 'uniqid'

export default () => {

  const portal = buildPortal(structure, registry, {})

  return {
    namespaced: true,
    state: {
      panels: {
        palette: { open: true },
        outline: { open: true },
        properties: { open: true },
        structure: { open: true },
        console: { open: true }
      },
      dimensions: { name: 'phone', position: 'relative', width: '414px', height: '736px' },
      scale: 1,
      portal: portal,
      selected: {
        page: portal.pages[0],
        widget: portal.pages[0].root
      },
      transfer: null
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
      },
      'widgets/select': (state, widget) => {
        state.selected.widget = widget
      },
      'widgets/property': (state, { widget, type, name, value }) => {
        widget.model.propsExpr = widget.model.propsExpr || {}
        widget.model.propsExpr[name] = value
        widget.id = uniqid()
      },
      'transfer/update': (state, data) => {
        state.transfer = data
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
      'props/remove': props.remove,

      'widgets/property': ({ state, commit, dispatch }, { widget, type, name, value }) => {
        commit('widgets/property', { widget, type, name, value })
        Vue.nextTick(() => {
          dispatch('editor/select', widget, { root: true })
        })
      },

      'transfer/put': ({ commit }, data) => {
        commit('transfer/update', data)
      },

      'transfer/retrieve': ({ state, commit }) => {
        const data = state.transfer
        commit('transfer/update', null)
        return data
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
  }
}
