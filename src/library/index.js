import types from './types'
import descriptors from './descriptors'
import factories from './factories'

export default {

  ...types,
  ...descriptors,
  ...factories,

  install: (Registry) => {
    for (const n in descriptors) {
      const descriptor = descriptors[n]
      Registry.descriptor('aw-text', descriptor)
    }

    for (const n in factories) {
      const factory = factories[n]
      Registry.factory(factory)
    }
  }
}
