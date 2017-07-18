import * as widgets from '@/widgets'
import { Registry } from '@/engine/registry'

export const registry = new Registry({
  components: {
    'canvas': () => widgets.Canvas,
    'box': () => widgets.Box,
    'row': () => widgets.Row,
    'column': () => widgets.Column,
    'row-repeater': () => widgets.RowRepeater,
    'column-repeater': () => widgets.ColumnRepeater
  }
})

export const structure = {
  name: 'portal-a',
  title: 'Demo Portal A',
  pages: [
    {
      route: '/',
      title: 'Default',
      root: {
        name: 'canvas',
        slots: {
          default: [
            {
              name: 'box',
              slots: {
                default: [
                  {
                    name: 'row',
                    slots: {
                      default: [
                        { name: 'box', propsExpr: { margin: '"10px"', width: '"40px"', height: '"60px"', background: '"red"' } },
                        { name: 'box', propsExpr: { margin: '"10px"', width: '"" + 20 * 3 + "px"', height: '"60px"', background: '"green"' } },
                        { name: 'box', propsExpr: { margin: '"10px"', width: '"40px"', height: '"60px"', background: '"blue"' } }
                      ]
                    }
                  }
                ]
              }
            },
            {
              name: 'box',
              slots: {
                default: [
                  {
                    name: 'row',
                    slots: {
                      default: [
                        { name: 'box', propsExpr: { margin: '"10px"', width: '"40px"', height: '"60px"', background: '"red"' } },
                        { name: 'box', propsExpr: { margin: '"10px"', width: '"" + 20 * 3 + "px"', height: '"60px"', background: '"green"' } },
                        { name: 'box', propsExpr: { margin: '"10px"', width: '"40px"', height: '"60px"', background: '"blue"' } },
                        { name: 'box', propsExpr: { margin: '"10px"', width: '"" + 20 * 3 + "px"', height: '"60px"', background: '"purple"' } },
                        { name: 'box', propsExpr: { margin: '"10px"', width: '"40px"', height: '"60px"', background: '"yellow"' } }
                      ]
                    }
                  }
                ]
              }
            },
            {
              name: 'box',
              slots: {
                default: [
                  {
                    name: 'row-repeater',
                    propsExpr: { items: '[0,1,2,3]' },
                    slots: {
                      default: [
                        { name: 'box', propsExpr: { margin: '"10px"', width: '"40px"', height: '"60px"', background: '"brown"' } }
                      ]
                    }
                  }
                ]
              }
            },
            {
              name: 'box',
              slots: {
                default: [
                  {
                    name: 'row-repeater',
                    propsExpr: { items: '[0,1,2,3,5]' },
                    slots: {
                      default: [
                        {
                          name: 'box',
                          slots: {
                            default: [
                              {
                                name: 'column-repeater',
                                propsExpr: { items: '[0,1,2,3,5]' },
                                slots: {
                                  default: [
                                    // eslint-disable-next-line
                                    { name: 'box', propsExpr: { margin: '"10px"', width: '"50px"', height: '"50px"', background: '(() => { return `rgba(100,${30*$runtime().column},0,0.5)` })()' } }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              name: 'box',
              propsExpr: { background: '"grey"' },
              slots: {
                default: [
                  {
                    name: 'row-repeater',
                    propsExpr: { items: '[0,1,2,3,5]' },
                    slots: {
                      default: [
                        {
                          name: 'box',
                          slots: {
                            default: [
                              {
                                name: 'column-repeater',
                                propsExpr: { items: '[0,1,2,3,5]' },
                                slots: {
                                  default: [
                                    // eslint-disable-next-line
                                    { name: 'box', propsExpr: { margin: '"10px"', width: '"50px"', height: '"50px"', background: '`rgba(100,${30*$runtime().row},0,0.5)`' }}
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    { route: '/offers', title: 'Offers' },
    { route: '/offer/:offer', title: 'Offer Details' }
  ]
}
