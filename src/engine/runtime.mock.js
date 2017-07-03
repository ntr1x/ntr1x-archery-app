import Vue from 'vue'
import { Registry } from './registry'

export const registry = new Registry({
  components: {
    'component-a': () => Vue.extend({}),
    'component-b': () => Vue.extend({}),
    'component-c': () => Vue.extend({
      props: {
        foo: {
          type: String,
          default: 'Foo String',
          category: 'Advanced'
        },
        bar: String,
        baz: String
      }
    }),
    'component-d': () => Vue.extend({
      props: {
        one: Number,
        two: Number,
        foo: String,
        bar: String
      }
    }),
    'component-e': () => Vue.extend({
      events: {
        render: Function,
        click: {
          type: Function,
          default: console.log,
          category: 'Actions'
        }
      }
    }),
    'component-f': () => Vue.extend({})
  }
})

export const WidgetA = {
  widget: {
    name: 'component-a'
  },
  expected: {
    name: 'component-a',
    ref: registry.component('component-a')
  }
}

export const WidgetB = {
  widget: {
    name: 'component-b'
  },
  context: {
    one: 1,
    two: 2
  },
  expected: {
    name: 'component-b',
    ref: registry.component('component-b'),
    context: {
      one: 1,
      two: 2
    }
  }
}

export const WidgetC = {
  widget: {
    name: 'component-c',
    propsExpr: {
      foo: '"ab" + 1 + 2',
      bar: '1 == 2',
      baz: '2 * 4'
    }
  },
  expected: {
    name: 'component-c',
    ref: registry.component('component-c'),
    propsData: {
      foo: 'ab12',
      bar: false,
      baz: 8
    }
  }
}

export const WidgetD = {
  widget: {
    name: 'component-d',
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
    name: 'component-d',
    ref: registry.component('component-d'),
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

export const WidgetE = {
  widget: {
    name: 'component-e',
    eventsExpr: {
      render: 'console.log',
      click: 'clickHandler'
    }
  },
  context: {
    clickHandler: console.info
  },
  expected: {
    name: 'component-e',
    ref: registry.component('component-e'),
    eventsData: {
      render: console.log,
      click: console.info
    },
    context: {
      clickHandler: console.info
    }
  }
}

const ABCDE = {
  context: [WidgetA, WidgetB, WidgetC, WidgetD, WidgetE].reduce((result, s) => Object.assign(result, s.context), {})
}

export const WidgetF = {
  widget: {
    name: 'component-f',
    slots: {
      default: [WidgetA, WidgetB, WidgetC, WidgetD, WidgetE].map(s => s.widget)
    }
  },
  context: ABCDE.context,
  expected: {
    ref: registry.component('component-f'),
    context: ABCDE.context,
    slots: (renderContext) => ({
      default: [WidgetA, WidgetB, WidgetC, WidgetD, WidgetE].map(s => ({
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

export const PageA = {
  page: {
    route: 'page-a',
    root: WidgetA.widget
  },
  context: WidgetA.context,
  expected: {
    route: 'page-a',
    root: WidgetA.expected
  }
}

export const PageB = {
  page: {
    route: 'page-b',
    root: WidgetB.widget
  },
  context: WidgetB.context,
  expected: {
    route: 'page-b',
    root: WidgetB.expected
  }
}

export const PageC = {
  page: {
    route: 'page-c',
    root: WidgetC.widget
  },
  context: WidgetC.context,
  expected: {
    route: 'page-c',
    root: WidgetC.expected
  }
}

export const PageD = {
  page: {
    route: 'page-d',
    root: WidgetD.widget
  },
  context: WidgetD.context,
  expected: {
    route: 'page-d',
    root: WidgetD.expected
  }
}

export const PageE = {
  page: {
    route: 'page-e',
    root: WidgetE.widget
  },
  context: WidgetE.context,
  expected: {
    route: 'page-e',
    root: WidgetE.expected
  }
}

export const PageF = {
  page: {
    route: 'page-f',
    root: WidgetF.widget
  },
  context: WidgetF.context,
  expected: {
    route: 'page-f',
    root: WidgetF.expected
  }
}

export const PortalA = {
  portal: {
    name: 'portal-a',
    title: 'Demo Portal A'
  },
  expected: {
    name: 'portal-a',
    title: 'Demo Portal A',
    pages: []
  }
}

export const PortalB = {
  portal: {
    name: 'portal-a',
    title: 'Demo Portal A',
    pages: [PageA, PageB, PageC, PageD, PageE, PageF].map((page) => page.page)
  },
  expected: {
    name: 'portal-a',
    title: 'Demo Portal A',
    pages: [PageA, PageB, PageC, PageD, PageE, PageF].map((page) => page.expected)
  }
}
