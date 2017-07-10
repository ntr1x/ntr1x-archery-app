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
            }
          ]
        }
      }
    },
    { route: '/offers', title: 'Offers' },
    { route: '/offer/:offer', title: 'Offer Details' }
  ]
}
