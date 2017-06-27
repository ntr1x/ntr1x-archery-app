export class Palette {

  factory (name, factory) {
    if (factory !== undefined) {
      this._factories[name] = factory
    }
    return this._factories[name]
  }
}

export default new Palette()
