import * as widgets from 'src/widgets'
import { Registry } from 'src/engine/registry'

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
  pictures: [
    {
      name: 'background',
      title: 'Background',
      settings: [
        { name: 'scale-1920xauto', width: 1920, height: null, type: 'scale', format: 'png', preview: false },
        { name: 'cover-128x72', width: 128, height: 72, type: 'cover', format: 'png', preview: true }
      ]
    },
    {
      name: 'picture',
      title: 'Picture',
      settings: [
        { name: 'cover-640x480', width: 640, height: 480, type: 'cover', format: 'png' },
        { name: 'cover-128x72', width: 128, height: 72, type: 'cover', format: 'png', preview: true }
      ]
    },
    {
      name: 'icon',
      title: 'Icon',
      settings: [
        { name: 'contain-128x128', width: 128, height: 128, type: 'contain', format: 'png', preview: true }
      ]
    }
  ],
  pages: [
    {
      route: '/',
      title: 'Default',
      root: {
        name: 'canvas',
        propsExpr: { background: '"#FFFFFF"' },
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
                    propsExpr: { items: '[0,1,2,3,5,6,7,8,9]' },
                    slots: {
                      default: [
                        {
                          name: 'box',
                          slots: {
                            default: [
                              {
                                name: 'column-repeater',
                                propsExpr: { items: '[0,1,2,3,5,6,7,8,9]' },
                                slots: {
                                  default: [
                                    // eslint-disable-next-line
                                    { name: 'box', propsExpr: { margin: '"10px"', width: '"50px"', height: '"50px"', background: '`rgba(100, ${30*($runtime().row + $runtime().column)}, 0, 0.5)`' }}
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
