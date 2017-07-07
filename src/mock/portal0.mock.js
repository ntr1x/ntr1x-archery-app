import * as widgets from '@/widgets'
import { Registry } from '@/engine/registry'

export const registry = new Registry({
  components: {
    'canvas': () => widgets.Canvas,
    'box': () => widgets.Box,
    'row': () => widgets.Row,
    'column': () => widgets.Column
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
        propsExpr: {
          justifyContent: '"r" + "ight"'
        },
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
                        { name: 'box' },
                        { name: 'box' },
                        { name: 'box' }
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
                        { name: 'box' },
                        { name: 'box' },
                        { name: 'box' },
                        { name: 'box' },
                        { name: 'box' }
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
