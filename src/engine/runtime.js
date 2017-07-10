import Vue from 'vue'
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

export function buildValue (expression, context) {
  try {
    // eslint-disable-next-line no-new-func
    const f = new Function(Object.keys(context || {}).join(','), `return ${expression}`)
    return f.apply(this, Object.values(context || {}))
  } catch (e) {
    return undefined
    // console.log(e)
    // throw new Error(`Cannot evaluate expression: ${expression}`)
  }
}

export function buildData (propsData, context) {
  return Object.entries(propsData).reduce((result, [name, value]) => {
    result[name] = buildValue(value, context)
    return result
  }, {})
}

export function buildChildren (children, registry, context, parent) {
  return children.map((child) => buildWidget(
    child,
    registry,
    context,
    parent
  ))
}

export function buildSlot (children, registry, context, parent) {

  const instance = {
    children: buildChildren(
      children,
      registry,
      context,
      parent
    )
  }

  instance.build = ($renderContext) => {

  }
}

export function buildSlots (slots, registry, context, parent) {
  return Object.entries(slots).reduce((result, [slot, children]) => {
    result[slot] = children == null
      ? undefined
      : buildChildren(
        children,
        registry,
        context,
        parent
      )
    return result
  }, {})
}

export function buildWidget (widget, registry, context, parent) {

  const ref = registry.component(widget.name)
  const component = ref()

  const extended = Vue.extend({
    props: component.props || {},
    events: component.events || {},
    mixins: component.mixins.map((m) => ({
      props: m.props,
      events: m.events
    }))
  })

  let instance = _.omitBy({
    id: uniqid(),
    ref,
    name: widget.name,
    title: component.title,
    model: widget,
    parent,
    propsCategories: extended.options.props
      ? () => buildCategories(extended.options.props)
      : undefined,
    eventsCategories: extended.options.events
      ? () => buildCategories(extended.options.events)
      : undefined,
    node: ($runtime) => {

      const runtimeContext = buildContext(
        context,
        { $runtime: () => $runtime }
      )

      return {
        id: uniqid(),
        component,
        propsData: extended.options.props
          ? buildData(buildExpr(extended.options.props, widget.propsExpr), runtimeContext)
          : undefined,
        eventsData: extended.options.events
          ? buildData(buildExpr(extended.options.events, widget.eventsExpr), runtimeContext)
          : undefined // ,
        // slots: instance.slots
        //   ?
      }
    },
    context: context || undefined
  }, _.isUndefined)

  const slots = widget.slots
    ? buildSlots(widget.slots, registry, context, instance)
    : undefined

  if (slots != null) {
    instance.slots = slots
  }

  return instance
}

export function buildNode (widget, extended, runtimeContext) {

  return {
    id: uniqid(),
    name: widget.name,
    propsData: extended.options.props
      ? buildData(buildExpr(extended.options.props, widget.propsExpr), runtimeContext)
      : undefined,
    eventsData: extended.options.events
      ? buildData(buildExpr(extended.options.events, widget.eventsExpr), runtimeContext)
      : undefined // ,
    // slots: instance.slots
    //   ? Object.entries(([name, slot]) => )
  }
}

export function buildExpr (defs, overrides) {
  return _.omitBy(
    Object.entries(defs).reduce((expr, [name, item]) => {
      expr[name] = (overrides != null && overrides[name]) || item.default || undefined
      return expr
    }, {})
    , _.isUndefined
  )
}

export function buildPage (page, registry, context) {

  const store = new Vuex.Store({
    modules: {
    }
  })

  const pageContext = buildContext(
    context,
    { $page: () => store }
  )

  const instance = _.omitBy({
    id: uniqid(),
    route: page.route,
    title: page.title,
    propsData: page.props ? buildData(buildExpr(page.props, page.propsExpr), context) : undefined,
    eventsData: page.events ? buildData(buildExpr(page.events, page.eventsExpr), context) : undefined,
    context: context || undefined,
    model: page,
    root: page.root
      ? buildWidget(page.root, registry, pageContext)
      : undefined
  }, _.isUndefined)

  return instance
}

export function buildPortal (portal, registry, context) {

  const store = new Vuex.Store({
    modules: {
    }
  })

  const portalContext = buildContext(
    context,
    { $portal: () => store }
  )

  return _.omitBy({
    id: uniqid(),
    name: portal.name,
    title: portal.title,
    context: context || undefined,
    pages: (portal.pages || []).map((page) => buildPage(page, registry, portalContext))
  }, _.isUndefined)
}

export function buildPath (widget) {
  return widget.parent != null
    ? [ ...buildPath(widget.parent), widget ]
    : [ widget ]
}

export function buildCategories (defs) {
  const categories = {}
  Object.entries(defs).forEach(([name, def]) => {
    const categoryName = def.category != null ? def.category.toLowerCase() : ''
    const category = categories[categoryName] = categories[categoryName] || { name: categoryName, defs: [] }
    category.defs.push({ name, def })
  }, {})
  return Object.values(categories).sort((a, b) => a.name < b.name ? -1 : a.name > b.name)
}

// export function buildFactory (component) {
//   const categories = {}
//   Object.entries(defs).forEach(([name, def]) => {
//     const categoryName = def.category != null ? def.category.toLowerCase() : ''
//     const category = categories[categoryName] = categories[categoryName] || { name: categoryName, defs: [] }
//     category.defs.push({ name, def })
//   }, {})
//   return Object.values(categories).sort((a, b) => a.name < b.name ? -1 : a.name > b.name)
// }
