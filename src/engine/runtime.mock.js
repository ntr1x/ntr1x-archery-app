import Vue from 'vue'
import { Registry } from './registry'

export const registry = new Registry({
  components: {
    'component-a': Vue.extend({}),
    'component-b': Vue.extend({}),
    'component-c': Vue.extend({
      props: {
        foo: {
          type: String,
          default: 'Foo String'
        },
        bar: String,
        baz: String
      }
    }),
    'component-d': Vue.extend({
      props: {
        one: Number,
        two: Number,
        foo: String,
        bar: String
      }
    }),
    'component-e': Vue.extend({
      events: {
        render: Function,
        click: {
          type: Function,
          default: console.log
        }
      }
    }),
    'component-f': Vue.extend({})
  }
})

export const WidgetA = {
  widget: {
    component: 'component-a'
  },
  expected: {
    component: registry.component('component-a')
  }
}

export const WidgetB = {
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

export const WidgetC = {
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

export const WidgetD = {
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

export const WidgetE = {
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

const ABCDE = {
  context: [WidgetA, WidgetB, WidgetC, WidgetD, WidgetE].reduce((result, s) => Object.assign(result, s.context), {})
}

export const WidgetF = {
  widget: {
    component: 'component-f',
    slots: {
      default: [WidgetA, WidgetB, WidgetC, WidgetD, WidgetE].map(s => s.widget)
    }
  },
  context: ABCDE.context,
  expected: {
    component: registry.component('component-f'),
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
    path: 'page-a',
    root: WidgetA.widget
  },
  context: WidgetA.context,
  expected: {
    path: 'page-a',
    root: WidgetA.expected
  }
}

export const PageB = {
  page: {
    path: 'page-b',
    root: WidgetB.widget
  },
  context: WidgetB.context,
  expected: {
    path: 'page-b',
    root: WidgetB.expected
  }
}

export const PageC = {
  page: {
    path: 'page-c',
    root: WidgetC.widget
  },
  context: WidgetC.context,
  expected: {
    path: 'page-c',
    root: WidgetC.expected
  }
}

export const PageD = {
  page: {
    path: 'page-d',
    root: WidgetD.widget
  },
  context: WidgetD.context,
  expected: {
    path: 'page-d',
    root: WidgetD.expected
  }
}

export const PageE = {
  page: {
    path: 'page-e',
    root: WidgetE.widget
  },
  context: WidgetE.context,
  expected: {
    path: 'page-e',
    root: WidgetE.expected
  }
}

export const PageF = {
  page: {
    path: 'page-f',
    root: WidgetF.widget
  },
  context: WidgetF.context,
  expected: {
    path: 'page-f',
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
