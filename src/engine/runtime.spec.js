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

    let defs = mock.registry.component('component-c')().options.props
    expect(runtime.buildExpr(defs)).to.deep.equal({ foo: 'Foo String' })
    expect(runtime.buildExpr(defs, {})).to.deep.equal({ foo: 'Foo String' })
    expect(runtime.buildExpr(defs, { demo: 'value' })).to.deep.equal({ foo: 'Foo String' })
    expect(runtime.buildExpr(defs, { foo: 'Another String' })).to.deep.equal({ foo: 'Another String' })

    defs = mock.registry.component('component-e')().options.events
    expect(runtime.buildExpr(defs)).to.deep.equal({ click: console.log })
    expect(runtime.buildExpr(defs, {})).to.deep.equal({ click: console.log })
    expect(runtime.buildExpr(defs, { demo: 'value' })).to.deep.equal({ click: console.log })
    expect(runtime.buildExpr(defs, { click: console.info })).to.deep.equal({ click: console.info })
  })

  it('should buildCategories', () => {

    {
      const component = mock.registry.component('component-c')()
      const result = runtime.buildCategories(component.options.props)

      expect(result.length).to.equal(2)
      expect(result[0].name).to.equal('')
      expect(result[0].defs.length).to.equal(2)
      expect(result[0].defs.length).to.equal(2)
      expect(result[0].defs[0].name).to.equal('bar')
      expect(result[0].defs[1].name).to.equal('baz')
      expect(result[1].name).to.equal('ADVANCED')
      expect(result[1].defs.length).to.equal(1)
      expect(result[1].defs[0].name).to.equal('foo')
    }

    {
      const component = mock.registry.component('component-e')()
      const result = runtime.buildCategories(component.options.events)

      expect(result.length).to.equal(2)
      expect(result[0].name).to.equal('')
      expect(result[0].defs.length).to.equal(1)
      expect(result[0].defs[0].name).to.equal('render')
      expect(result[1].name).to.equal('ACTIONS')
      expect(result[1].defs.length).to.equal(1)
      expect(result[1].defs[0].name).to.equal('click')
    }
  })

  it('should buildWidget', () => {

    const widget = mock.WidgetA
    const result = runtime.buildWidget(widget.widget, mock.registry)

    expect(result).to.have.property('id')
    expect(result).to.have.property('ref').that.equal(widget.expected.ref)
    expect(result).to.not.have.property('context')
    expect(result).to.not.have.property('propsData')
    expect(result).to.not.have.property('eventsData')
    expect(result).to.not.have.property('slots')
  })

  it('should buildWidget with context', () => {

    const widget = mock.WidgetB
    const result = runtime.buildWidget(widget.widget, mock.registry, widget.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('name').that.equal(widget.expected.name)
    expect(result).to.have.property('ref').that.equal(widget.expected.ref)
    expect(result).to.have.property('context').that.deep.equal(widget.expected.context)
    expect(result).to.not.have.property('propsData')
    expect(result).to.not.have.property('eventsData')
    expect(result).to.not.have.property('slots')
  })

  it('should buildWidget with propsData', () => {

    {
      const widget = mock.WidgetC
      const result = runtime.buildWidget(widget.widget, mock.registry, widget.context)

      expect(result).to.have.property('id')
      expect(result).to.have.property('name').that.equal(widget.expected.name)
      expect(result).to.have.property('ref').that.equal(widget.expected.ref)
      expect(result).to.not.have.property('context')
      expect(result).to.have.property('propsData')
      expect(result).to.have.property('propsCategories')
      expect(result).to.not.have.property('eventsCategories')
      expect(result).to.not.have.property('eventsData')
      expect(result).to.not.have.property('slots')

      expect(result.propsCategories().map((category) => category.name)).to.deep.equal(['', 'ADVANCED'])
      expect(result.propsData()).to.deep.equal(mock.WidgetC.expected.propsData)
    }

    {
      const widget = mock.WidgetD
      const result = runtime.buildWidget(widget.widget, mock.registry, widget.context)

      expect(result).to.have.property('id')
      expect(result).to.have.property('name').that.equal(widget.expected.name)
      expect(result).to.have.property('ref').that.equal(widget.expected.ref)
      expect(result).to.have.property('context').that.deep.equal(widget.expected.context)
      expect(result).to.have.property('propsData')
      expect(result).to.not.have.property('eventsData')
      expect(result).to.not.have.property('slots')

      expect(result.propsCategories().map((category) => category.name)).to.deep.equal([''])
      expect(result.propsData()).to.deep.equal(mock.WidgetD.expected.propsData)
    }
  })

  it('should buildWidget with eventsData', () => {

    const widget = mock.WidgetE
    const result = runtime.buildWidget(widget.widget, mock.registry, widget.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('name').that.equal(widget.expected.name)
    expect(result).to.have.property('ref').that.equal(widget.expected.ref)
    expect(result).to.have.property('context').that.deep.equal(widget.expected.context)
    expect(result).to.not.have.property('propsData')
    expect(result).to.have.property('eventsData')
    expect(result).to.not.have.property('propsCategories')
    expect(result).to.have.property('eventsCategories')
    expect(result).to.not.have.property('slots')

    expect(result.eventsCategories().map((category) => category.name)).to.deep.equal(['', 'ACTIONS'])
    expect(result.eventsData()).to.deep.equal(mock.WidgetE.expected.eventsData)
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
        expect(resultItem).to.have.property('ref').that.equal(expectedItem.ref)
        if (expectedItem.context) {
          expect(resultItem).to.have.property('context').that.deep.equal(expectedItem.context)
        } else {
          expect(resultItem).to.not.have.property('context')
        }
        if (expectedItem.propsData !== undefined) {
          expect(resultItem).to.have.property('propsData')
          expect(resultItem.propsData()).to.deep.equal(expectedItem.propsData)
        } else {
          expect(resultItem).to.not.have.property('propsData')
        }
        if (expectedItem.eventsData !== undefined) {
          expect(resultItem).to.have.property('eventsData')
          expect(resultItem.eventsData()).to.deep.equal(expectedItem.eventsData)
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
        expect(resultItem).to.have.property('ref').that.equal(expectedItem.ref)
        expect(resultItem).to.have.property('context').that.deep.equal(mock.WidgetF.context)
      }
    }
  })

  it('should buildWidget with slots', () => {

    const result = runtime.buildWidget(mock.WidgetF.widget, mock.registry, mock.WidgetF.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('ref').that.equal(mock.WidgetF.expected.ref)
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
        expect(resultItem).to.have.property('ref').that.equal(expectedItem.ref)
        expect(resultItem).to.have.property('context').that.deep.equal(expectedItem.context)
      }
    }
  })

  it('should buildPage', () => {

    for (let page of [mock.PageA, mock.PageB, mock.PageC, mock.PageD, mock.PageE, mock.PageF]) {
      const result = runtime.buildPage(page.page, mock.registry, page.context)

      expect(result).to.have.property('id')
      expect(result).to.have.property('route').that.equal(page.expected.route)
      expect(result).to.have.property('root')

      expect(result.root).to.have.property('id')
      expect(result.root).to.have.property('ref').that.equal(page.expected.root.ref)
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

  it('should buildPath of the widget', () => {

    let page = mock.PageF
    const result = runtime.buildPage(page.page, mock.registry, page.context)
    const slots = result.root.slots()
    const widget = slots.default[0]

    let path = runtime.buildPath(widget)

    expect(path[0].id).to.equal(result.root.id)
    expect(path[path.length - 1].id).to.equal(widget.id)

    let names = path.map((widget) => widget.name)
    expect(names).to.deep.equal(['component-f', 'component-a'])
  })
})
