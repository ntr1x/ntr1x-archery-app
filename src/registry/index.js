class Registry {

  descriptors: {}
  factories: []

  descriptor (name, d) {
    this.descriptors[name] = d
  }

  factory (f) {
    this.factories.push(f)
  }
}

function Type (target) {
  return function ({ title }) {
    target.$descriptor = {
      title
    }
  }
}

function Property (target, key, descriptor) {
  return function ({ type, title }) {
    target.$descriptor = {
      type,
      title
    }
  }
}

function Descriptor (target) {
  return function ({ title }) {
    target.$descriptor = {
      title
    }
  }
}

function Factory (target) {
  return function ({ title, icon, descriptor, widget }) {
    target.$descriptor = {
      title,
      icon,
      descriptor,
      widget
    }
  }
}

export default {
  Type,
  Property,
  Descriptor,
  Factory,
  Registry: new Registry()
}
