import { expect } from 'chai'
import Vue from 'vue'
import { Registry } from './registry'

describe('engine/registry', () => {

  let config = {
    components: {
      'component-a': () => Vue.extend({}),
      'component-b': () => Vue.extend({})
    },
    specials: {
      'box': () => Vue.extend({}),
      'stub': () => Vue.extend({}),
      'canvas': () => Vue.extend({})
    }
  }

  it('should have components', () => {

    const registry = new Registry(config)

    expect(registry.component('component-a')).to.be.equal(config.components['component-a'])
    expect(registry.component('component-b')).to.be.equal(config.components['component-b'])
    expect(registry.component('component-undefined')).to.be.equal(undefined)
  })

  it('should have specials', () => {

    const registry = new Registry(config)

    expect(registry.special('box')).to.be.equal(config.specials['box'])
    expect(registry.special('stub')).to.be.equal(config.specials['stub'])
    expect(registry.special('canvas')).to.be.equal(config.specials['canvas'])
  })

  it('should register component', () => {

    const registry = new Registry(config)

    let component1 = Vue.extend({})
    expect(registry.component('component-1', component1)).to.be.equal(registry.component('component-1'))
    expect(registry.component('component-1')()).to.be.equal(component1)
  })

  it('should register special', () => {

    const registry = new Registry(config)

    let component1 = Vue.extend({})
    expect(registry.special('component-1', component1)).to.be.equal(registry.special('component-1'))
    expect(registry.special('component-1')()).to.be.equal(component1)
  })
})
