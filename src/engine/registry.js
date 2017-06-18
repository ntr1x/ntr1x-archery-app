export class Registry {

  constructor ({ components, stub } = {}) {
    this._components = components || {}
    this._stub = stub
  }

  component (name, component) {
    if (component !== undefined) {
      this._components[name] = component
    }
    return name in this._components
      ? this._components[name]
      : this._stub
  }

  stub (stub) {
    if (stub !== undefined) {
      this._stub = stub
    }
    return this._stub
  }
}

export default new Registry()
