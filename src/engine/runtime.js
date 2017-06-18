import Vuex from 'vuex'
import uniqid from 'uniqid'
import _ from 'lodash'

export function buildContext (parent, actual) {
  return {
    ...parent,
    ...actual,
    $parent: parent
  }
}

export function buildExpression (expression, context) {
  try {
    // eslint-disable-next-line no-new-func
    const f = new Function(Object.keys(context || {}).join(','), `return ${expression}`)
    return f.apply(this, Object.values(context || {}))
  } catch (e) {
    console.log(e)
    throw new Error(`Cannot evaluate expression: ${expression}`)
  }
}

export function buildData (propsData, context) {
  return Object.entries(propsData).reduce((result, [name, value]) => {
    result[name] = buildExpression(value, context)
    return result
  }, {})
}

export function buildChildren (children, registry, context) {
  return children.map((child) => buildWidget(
    child,
    registry,
    context
  ))
}

export function buildSlots (slots, registry, context) {
  return Object.entries(slots).reduce((result, [slot, children]) => {
    result[slot] = children == null
      ? undefined
      : buildChildren(
        children,
        registry,
        context
      )
    return result
  }, {})
}

export function buildWidget (widget, registry, context) {
  return _.omitBy({
    id: uniqid(),
    component: registry.component(widget.component),
    propsData: widget.propsExpr ? buildData(widget.propsExpr, context) : undefined,
    eventsData: widget.eventsExpr ? buildData(widget.eventsExpr, context) : undefined,
    context: context || undefined,
    slots: widget.slots == null
      ? undefined
      : (renderContext) => buildSlots(
        widget.slots,
        registry,
        buildContext(context, { $render: renderContext })
    )
  }, _.isUndefined)
}

export function buildPage (page, registry, context) {

  const store = new Vuex.Store({
    modules: {
      //    context.store.dispatch('modals/show')
      //    Модалки должны быт в $portal
      // modals: ModalStore({ ... })
      //    All Swagger connectors (store each factory in state, dispatch by name with overrides),
      //    context.store.dispatch('remotes/execute', { id: 234 })
      // remotes: RemoteStore({ ... })
    }
  })

  // const route = {}
  // {
  //   $store: store,
  //   // $route: route,
  //   // $router: router,
  //   $props: {}
  // }

  return _.omitBy({
    id: uniqid(),
    path: page.path,
    root: buildWidget(
      page.root,
      registry,
      buildContext(
        context,
        { $page: store }
      )
    )
  }, _.isUndefined)
}

// export function buildWidget (widget: Widget, context: Object): {
//   return {
//
//   }
// }

// export default buildWidget () {
//
// }

// import _ from 'lodash'

// export class Builder {
//
//   build ({ pages }, context: Object) {
//     let result = {}
//     if (pages != null) {
//       result.pages = pages.map(page => this.buildPage(page, context))
//     }
//     return result
//   }
//
//   buildPage ({ path, root }, context) {
//     let result = { path }
//     if (root != null) {
//       result.root = this.buildWidget(root)
//     }
//     return result
//   }
//
//   buildWidget ({ component, container, propsData, eventsData, children }, context) {
//     let result = { component }
//     if (container != null) {
//       result.container = this.buildContainer(container, context)
//     }
//     if (propsData != null) {
//       result.propsData = this.buildPropsData(propsData, context)
//     }
//     if (eventsData != null) {
//       result.eventsData = this.buildEventsData(eventsData, context)
//     }
//     if (children != null) {
//       result.children = children.map((child) => this.buildWidget(child, context))
//     }
//     return result
//   }
//
//   buildContainer ({ component, propsData, eventsData }, context) {
//     let result = { component }
//     if (propsData != null) {
//       result.propsData = this.buildPropsData(propsData, context)
//     }
//     if (eventsData != null) {
//       result.eventsData = this.buildEventsData(eventsData, context)
//     }
//     return result
//   }
//
//   buildPropsData (propsData, context) {
//
//     let data = {}
//
//     for (let prop in propsData) {
//       let value = this.buildValue({ expression: propsData[prop] }, context)
//       if (typeof value !== 'undefined') {
//         data[prop] = value
//       }
//     }
//
//     return data
//   }
//
//   buildEventsData (eventsData, context) {
//
//     let data = {}
//
//     for (let prop in eventsData) {
//       let value = this.buildValue({ expression: eventsData[prop] }, context)
//       if (typeof value !== 'undefined') {
//         data[prop] = value
//       }
//     }
//
//     return data
//   }
//
//   buildValue ({ expression }, context) {
//
//     try {
//
//       let keys = []
//       let values = []
//
//       if (context != null) {
//         for (let k in context) {
//           keys.push(k)
//           values.push(context[k])
//         }
//       }
//
//       // eslint-disable-next-line no-new-func
//       let f = new Function(keys.join(','), `return ${expression}`)
//       let value = f.apply(this, values)
//
//       return value
//
//     } catch (e) {
//
//       console.log(e)
//     }
//   }
// }
