import { Registry } from './registry'

export const registry = new Registry({
  components: {
    'component-a': function () {},
    'component-b': function () {},
    'component-c': function () {},
    'component-d': function () {},
    'component-e': function () {},
    'component-f': function () {}
  }
})

export const A = {
  widget: {
    component: 'component-a'
  },
  expected: {
    component: registry.component('component-a')
  }
}

export const B = {
  widget: {
    component: 'component-b'
  },
  context: {
    one: 1,
    two: 2
  },
  expected: {
    component: registry.component('component-b'),
    context: {
      one: 1,
      two: 2
    }
  }
}

export const C = {
  widget: {
    component: 'component-c',
    propsExpr: {
      foo: '"ab" + 1 + 2',
      bar: '1 == 2',
      baz: '2 * 4'
    }
  },
  expected: {
    component: registry.component('component-c'),
    propsData: {
      foo: 'ab12',
      bar: false,
      baz: 8
    }
  }
}

export const D = {
  widget: {
    component: 'component-d',
    propsExpr: {
      foo: 'one + two',
      bar: 'foo.alfa + foo.omega + bar.beta + bar.gamma'
    }
  },
  context: {
    one: 1,
    two: 2,
    foo: { alfa: 'a', omega: 'o' },
    bar: { beta: 'b', gamma: 'g' }
  },
  expected: {
    component: registry.component('component-d'),
    propsData: {
      foo: 3,
      bar: 'aobg'
    },
    context: {
      one: 1,
      two: 2,
      foo: { alfa: 'a', omega: 'o' },
      bar: { beta: 'b', gamma: 'g' }
    }
  }
}

export const E = {
  widget: {
    component: 'component-e',
    eventsExpr: {
      render: 'console.log',
      click: 'clickHandler'
    }
  },
  context: {
    clickHandler: console.info
  },
  expected: {
    component: registry.component('component-e'),
    eventsData: {
      render: console.log,
      click: console.info
    },
    context: {
      clickHandler: console.info
    }
  }
}

export const ABCDE = {
  context: [A, B, C, D, E].reduce((result, s) => Object.assign(result, s.context), {})
}

export const F = {
  widget: {
    component: 'component-f',
    slots: {
      default: [A, B, C, D, E].map(s => s.widget)
    }
  },
  context: ABCDE.context,
  expected: {
    component: registry.component('component-f'),
    context: ABCDE.context,
    slots: (renderContext) => ({
      default: [A, B, C, D, E].map(s => ({
        ...s.expected,
        context: {
          ...ABCDE.context,
          $render: renderContext,
          $parent: {
            ...ABCDE.context
          }
        }
      }))
    })
  }
}
