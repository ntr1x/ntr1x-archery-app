import Vue from 'vue'

const randomUID = () => Math.random().toString(36).substr(2, 8)

const fixModel = (model) => {

  if (!model) return null

  let component = Vue.component(model.name) || null

  if (!component) return null

  let props = []
  for (let name in component.options.props) {
    props[name] = Object.assign({
      strategy: 'value',
      value: null,
      expression: null
    }, model.props[name])
  }

  model.props = props

  return model
}

const getDescription = (model) => {

  if (!model) return null

  let component = Vue.component(model.name) || null

  if (!component) return null

  return {
    model,
    component,
    title: ('title' in component.options ? component.options.title : `<${model.name} />`)
  }
}

const getPath = (model) => {
  let path = []
  for (let p = model.parent; p.parent != null; p = p.parent) {
    path.unshift(p)
  }
  return path
}

const getCategories = (model) => {

  if (!model) return null

  let component = Vue.component(model.name) || Vue.extend(model)

  if (!component || !component.options || !component.options.props) return null

  // console.log(component.options)

  let categories = {}
  for (let propName in component.options.props) {
    let prop = {
      name: propName,
      ...component.options.props[propName]
    }
    let categoryName = prop.category != null ? ('' + prop.category).toUpperCase() : ''
    let category = categories[categoryName] = categories[categoryName] || { name: categoryName, props: [] }
    category.props.push(prop)
  }

  let array = []
  for (let name in categories) {
    let category = categories[name]
    array.push(category)
  }

  return array.sort((a, b) => a.name < b.name)
}

export {
  randomUID,
  fixModel,
  getDescription,
  getPath,
  getCategories
}
