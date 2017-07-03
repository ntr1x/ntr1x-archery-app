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

  let instance = _.omitBy({
    id: uniqid(),
    ref,
    name: widget.name,
    parent,
    propsCategories: component.options.props
      ? () => buildCategories(component.options.props)
      : undefined,
    eventsCategories: component.options.events
      ? () => buildCategories(component.options.events)
      : undefined,
    propsData: component.options.props
      ? () => buildData(buildExpr(component.options.props, widget.propsExpr), context)
      : undefined,
    eventsData: component.options.events
      ? () => buildData(buildExpr(component.options.events, widget.eventsExpr), context)
      : undefined,
    slots: widget.slots
      ? ($render) => buildSlots(widget.slots, registry, buildContext(context, { $render }), instance)
      : undefined,
    context: context || undefined
  }, _.isUndefined)

  return instance
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
    { $page: store }
  )

  return _.omitBy({
    id: uniqid(),
    route: page.route,
    propsData: page.props ? buildData(buildExpr(page.props, page.propsExpr), context) : undefined,
    eventsData: page.events ? buildData(buildExpr(page.events, page.eventsExpr), context) : undefined,
    context: context || undefined,
    root: page.root != null ? buildWidget(page.root, registry, pageContext) : undefined
  }, _.isUndefined)
}

export function buildPortal (portal, registry, context) {

  const store = new Vuex.Store({
    modules: {
    }
  })

  const portalContext = buildContext(
    context,
    { $portal: store }
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
    const categoryName = def.category != null ? def.category.toUpperCase() : ''
    const category = categories[categoryName] = categories[categoryName] || { name: categoryName, defs: [] }
    category.defs.push({ name, def })
  }, {})
  return Object.values(categories).sort((a, b) => a.name < b.name ? -1 : a.name > b.name)
}

// export function buildFactory (component) {
//   const categories = {}
//   Object.entries(defs).forEach(([name, def]) => {
//     const categoryName = def.category != null ? def.category.toUpperCase() : ''
//     const category = categories[categoryName] = categories[categoryName] || { name: categoryName, defs: [] }
//     category.defs.push({ name, def })
//   }, {})
//   return Object.values(categories).sort((a, b) => a.name < b.name ? -1 : a.name > b.name)
// }
