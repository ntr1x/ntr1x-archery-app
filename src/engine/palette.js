export default class Palette {

  constructor () {
    this._categories = {}
  }

  register (component) {
    const category = this._categories[component.category] = category[component.category]
    category.items.push({
      name: component.name,
      component: component
    })
  }
}
