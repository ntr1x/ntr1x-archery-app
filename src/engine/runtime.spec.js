import { expect } from 'chai'
import * as runtime from './runtime'
import * as mock from './runtime.mock'

describe('engine/runtime', () => {

  it('should buildContext', () => {

    const context = { foo: 1, bar: 'this is a bar' }
    const extra = { bar: 'another bar', baz: 'boo!!' }

    let result = runtime.buildContext(context, extra)

    expect(result).to.deep.equal({
      foo: 1,
      bar: 'another bar',
      baz: 'boo!!',
      $parent: {
        foo: 1,
        bar: 'this is a bar'
      }
    })
  })

  it('should buildValue', () => {
    expect(runtime.buildValue(mock.WidgetC.widget.propsExpr.foo)).to.deep.equal(mock.WidgetC.expected.propsData.foo)
    expect(runtime.buildValue(mock.WidgetC.widget.propsExpr.bar)).to.deep.equal(mock.WidgetC.expected.propsData.bar)
    expect(runtime.buildValue(mock.WidgetC.widget.propsExpr.baz)).to.deep.equal(mock.WidgetC.expected.propsData.baz)
  })

  it('should buildValue with context', () => {
    expect(runtime.buildValue(mock.WidgetD.widget.propsExpr.foo, mock.WidgetD.context)).to.deep.equal(mock.WidgetD.expected.propsData.foo)
    expect(runtime.buildValue(mock.WidgetD.widget.propsExpr.bar, mock.WidgetD.context)).to.deep.equal(mock.WidgetD.expected.propsData.bar)
  })

  it('should buildData', () => {
    expect(runtime.buildData(mock.WidgetC.widget.propsExpr)).to.deep.equal(mock.WidgetC.expected.propsData)
  })

  it('should buildData with context', () => {
    expect(runtime.buildData(mock.WidgetD.widget.propsExpr, mock.WidgetD.context)).to.deep.equal(mock.WidgetD.expected.propsData)
  })

  it('should buildExpr', () => {

    let defs = mock.registry.component('component-c').options.props
    expect(runtime.buildExpr(defs)).to.deep.equal({ foo: 'Foo String' })
    expect(runtime.buildExpr(defs, {})).to.deep.equal({ foo: 'Foo String' })
    expect(runtime.buildExpr(defs, { demo: 'value' })).to.deep.equal({ foo: 'Foo String' })
    expect(runtime.buildExpr(defs, { foo: 'Another String' })).to.deep.equal({ foo: 'Another String' })

    defs = mock.registry.component('component-e').options.events
    expect(runtime.buildExpr(defs)).to.deep.equal({ click: console.log })
    expect(runtime.buildExpr(defs, {})).to.deep.equal({ click: console.log })
    expect(runtime.buildExpr(defs, { demo: 'value' })).to.deep.equal({ click: console.log })
    expect(runtime.buildExpr(defs, { click: console.info })).to.deep.equal({ click: console.info })
  })

  it('should buildWidget', () => {

    const result = runtime.buildWidget(mock.WidgetA.widget, mock.registry)

    expect(result).to.have.property('id')
    expect(result).to.have.property('component').that.equal(mock.WidgetA.expected.component)
    expect(result).to.not.have.property('context')
    expect(result).to.not.have.property('propsData')
    expect(result).to.not.have.property('eventsData')
    expect(result).to.not.have.property('slots')
  })

  it('should buildWidget with context', () => {

    const result = runtime.buildWidget(mock.WidgetB.widget, mock.registry, mock.WidgetB.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('component').that.equal(mock.WidgetB.expected.component)
    expect(result).to.have.property('context').that.deep.equal(mock.WidgetB.expected.context)
    expect(result).to.not.have.property('propsData')
    expect(result).to.not.have.property('eventsData')
    expect(result).to.not.have.property('slots')
  })

  it('should buildWidget with propsData', () => {

    {
      const result = runtime.buildWidget(mock.WidgetC.widget, mock.registry, mock.WidgetC.context)

      expect(result).to.have.property('id')
      expect(result).to.have.property('component').that.equal(mock.WidgetC.expected.component)
      expect(result).to.not.have.property('context')
      expect(result).to.have.property('propsData').that.deep.equal(mock.WidgetC.expected.propsData)
      expect(result).to.not.have.property('eventsData')
      expect(result).to.not.have.property('slots')
    }

    {
      const result = runtime.buildWidget(mock.WidgetD.widget, mock.registry, mock.WidgetD.context)

      expect(result).to.have.property('id')
      expect(result).to.have.property('component').that.equal(mock.WidgetD.expected.component)
      expect(result).to.have.property('context').that.deep.equal(mock.WidgetD.expected.context)
      expect(result).to.have.property('propsData').that.deep.equal(mock.WidgetD.expected.propsData)
      expect(result).to.not.have.property('eventsData')
      expect(result).to.not.have.property('slots')
    }
  })

  it('should buildWidget with eventsData', () => {

    const result = runtime.buildWidget(mock.WidgetE.widget, mock.registry, mock.WidgetE.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('component').that.equal(mock.WidgetE.expected.component)
    expect(result).to.have.property('context').that.deep.equal(mock.WidgetE.expected.context)
    expect(result).to.not.have.property('propsData')
    expect(result).to.have.property('eventsData').that.deep.equal(mock.WidgetE.expected.eventsData)
    expect(result).to.not.have.property('slots')
  })

  it('should buildChildren', () => {

    const tests = [
      {
        children: [],
        expected: []
      },
      {
        children: [ mock.WidgetA.widget ],
        context: mock.WidgetA.context,
        expected: [ mock.WidgetA.expected ]
      },
      {
        children: [ mock.WidgetB.widget, mock.WidgetB.widget ],
        context: mock.WidgetB.context,
        expected: [ mock.WidgetB.expected, mock.WidgetB.expected ]
      },
      {
        children: [ mock.WidgetC.widget, mock.WidgetC.widget ],
        context: mock.WidgetC.context,
        expected: [ mock.WidgetC.expected, mock.WidgetC.expected ]
      },
      {
        children: [ mock.WidgetD.widget, mock.WidgetD.widget ],
        context: mock.WidgetD.context,
        expected: [ mock.WidgetD.expected, mock.WidgetD.expected ]
      },
      {
        children: [ mock.WidgetE.widget, mock.WidgetE.widget ],
        context: mock.WidgetE.context,
        expected: [ mock.WidgetE.expected, mock.WidgetE.expected ]
      }
    ]

    for (let { children, context, expected } of tests) {

      const result = runtime.buildChildren(children, mock.registry, context)

      expect(result.length).to.equal(expected.length)
      expect(result.length).to.equal(children.length)

      for (let i = 0; i < children.length; i++) {

        const resultItem = result[i]
        const expectedItem = expected[i]

        expect(resultItem).to.have.property('id')
        expect(resultItem).to.have.property('component').that.equal(expectedItem.component)
        if (expectedItem.context) {
          expect(resultItem).to.have.property('context').that.deep.equal(expectedItem.context)
        } else {
          expect(resultItem).to.not.have.property('context')
        }
        if (expectedItem.propsData !== undefined) {
          expect(resultItem).to.have.property('propsData').that.deep.equal(expectedItem.propsData)
        } else {
          expect(resultItem).to.not.have.property('propsData')
        }
        if (expectedItem.eventsData !== undefined) {
          expect(resultItem).to.have.property('eventsData').that.deep.equal(expectedItem.eventsData)
        } else {
          expect(resultItem).to.not.have.property('eventsData')
        }
        expect(resultItem).to.not.have.property('slots')
      }
    }
  })

  it('should buildSlots', () => {

    const original = mock.WidgetF.widget.slots
    const result = runtime.buildSlots(original, mock.registry, mock.WidgetF.context)
    const expected = mock.WidgetF.expected.slots({ i: 5, j: 7 })

    expect(result).to.have.property('default')

    for (let slot in result) {

      expect(result[slot].length).to.equal(original[slot].length)
      expect(result[slot].length).to.equal(expected[slot].length)

      for (let i = 0; i < result[slot].length; i++) {

        const resultItem = result[slot][i]
        const expectedItem = expected[slot][i]

        expect(resultItem).to.have.property('id')
        expect(resultItem).to.have.property('component').that.equal(expectedItem.component)
        expect(resultItem).to.have.property('context').that.deep.equal(mock.WidgetF.context)
      }
    }
  })

  it('should buildWidget with slots', () => {

    const result = runtime.buildWidget(mock.WidgetF.widget, mock.registry, mock.WidgetF.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('component').that.equal(mock.WidgetF.expected.component)
    expect(result).to.have.property('context').that.deep.equal(mock.WidgetF.expected.context)
    expect(result).to.not.have.property('propsData')
    expect(result).to.not.have.property('eventsData')
    expect(result).to.have.property('slots')

    const original = mock.WidgetF.widget.slots
    const evaluated = result.slots({ i: 5, j: 7 })
    const expected = mock.WidgetF.expected.slots({ i: 5, j: 7 })

    expect(evaluated).to.have.property('default')

    for (let slot in evaluated) {

      expect(evaluated[slot].length).to.equal(original[slot].length)
      expect(evaluated[slot].length).to.equal(expected[slot].length)

      for (let i = 0; i < evaluated[slot].length; i++) {

        const resultItem = evaluated[slot][i]
        const expectedItem = expected[slot][i]

        expect(resultItem).to.have.property('id')
        expect(resultItem).to.have.property('component').that.equal(expectedItem.component)
        expect(resultItem).to.have.property('context').that.deep.equal(expectedItem.context)
      }
    }
  })

  it('should buildPage', () => {

    for (let page of [mock.PageA, mock.PageB, mock.PageC, mock.PageD, mock.PageE, mock.PageF]) {
      const result = runtime.buildPage(page.page, mock.registry, page.context)

      expect(result).to.have.property('id')
      expect(result).to.have.property('path').that.equal(page.expected.path)
      expect(result).to.have.property('root')

      expect(result.root).to.have.property('id')
      expect(result.root).to.have.property('component').that.equal(page.expected.root.component)
      expect(result.root).to.have.property('context')
      expect(result.root.context).to.have.property('$page')
    }
  })

  it('should buildPortal', () => {

    const portal = mock.PortalA
    const result = runtime.buildPortal(portal.portal, mock.registry, portal.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('name').that.equal(portal.expected.name)
    expect(result).to.have.property('title').that.equal(portal.expected.title)
    expect(result).to.have.property('pages')
    expect(result.pages.length).to.equal(0)
  })

  it('should buildPortal with pages', () => {

    const portal = mock.PortalB
    const result = runtime.buildPortal(portal.portal, mock.registry, mock.WidgetF.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('name').that.equal(portal.expected.name)
    expect(result).to.have.property('title').that.equal(portal.expected.title)
    expect(result).to.have.property('pages')
    expect(result.pages.length).to.equal(portal.expected.pages.length)
  })
})
