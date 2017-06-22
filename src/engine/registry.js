export class Registry {

  constructor ({ components, specials } = {}) {
    this._components = components || {}
    this._specials = specials || {}
  }

  component (name, component) {
    if (component !== undefined) {
      this._components[name] = () => component
    }
    return this._components[name]
  }

  special (name, component) {
    if (component !== undefined) {
      this._specials[name] = () => component
    }
    return this._specials[name]
  }
}

export default new Registry()
