import { expect } from 'chai'
import { buildContext, buildExpression, buildData, buildWidget, buildChildren, buildSlots } from './runtime'
import * as mock from './runtime.mock'

describe('engine/runtime', () => {

  it('should buildContext', () => {

    const context = { foo: 1, bar: 'this is a bar' }
    const extra = { bar: 'another bar', baz: 'boo!!' }

    let result = buildContext(context, extra)

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

  it('should buildExpression', () => {
    expect(buildExpression(mock.C.widget.propsExpr.foo)).to.deep.equal(mock.C.expected.propsData.foo)
    expect(buildExpression(mock.C.widget.propsExpr.bar)).to.deep.equal(mock.C.expected.propsData.bar)
    expect(buildExpression(mock.C.widget.propsExpr.baz)).to.deep.equal(mock.C.expected.propsData.baz)
  })

  it('should buildExpression with context', () => {
    expect(buildExpression(mock.D.widget.propsExpr.foo, mock.D.context)).to.deep.equal(mock.D.expected.propsData.foo)
    expect(buildExpression(mock.D.widget.propsExpr.bar, mock.D.context)).to.deep.equal(mock.D.expected.propsData.bar)
  })

  it('should buildData', () => {
    expect(buildData(mock.C.widget.propsExpr)).to.deep.equal(mock.C.expected.propsData)
  })

  it('should buildData with context', () => {
    expect(buildData(mock.D.widget.propsExpr, mock.D.context)).to.deep.equal(mock.D.expected.propsData)
  })

  it('should buildWidget', () => {

    const result = buildWidget(mock.A.widget, mock.registry)

    expect(result).to.have.property('id')
    expect(result).to.have.property('component').that.equal(mock.A.expected.component)
    expect(result).to.not.have.property('context')
    expect(result).to.not.have.property('propsData')
    expect(result).to.not.have.property('eventsData')
    expect(result).to.not.have.property('slots')
  })

  it('should buildWidget with context', () => {

    const result = buildWidget(mock.B.widget, mock.registry, mock.B.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('component').that.equal(mock.B.expected.component)
    expect(result).to.have.property('context').that.deep.equal(mock.B.expected.context)
    expect(result).to.not.have.property('propsData')
    expect(result).to.not.have.property('eventsData')
    expect(result).to.not.have.property('slots')
  })

  it('should buildWidget with propsData', () => {

    {
      const result = buildWidget(mock.C.widget, mock.registry, mock.C.context)

      expect(result).to.have.property('id')
      expect(result).to.have.property('component').that.equal(mock.C.expected.component)
      expect(result).to.not.have.property('context')
      expect(result).to.have.property('propsData').that.deep.equal(mock.C.expected.propsData)
      expect(result).to.not.have.property('eventsData')
      expect(result).to.not.have.property('slots')
    }

    {
      const result = buildWidget(mock.D.widget, mock.registry, mock.D.context)

      expect(result).to.have.property('id')
      expect(result).to.have.property('component').that.equal(mock.D.expected.component)
      expect(result).to.have.property('context').that.deep.equal(mock.D.expected.context)
      expect(result).to.have.property('propsData').that.deep.equal(mock.D.expected.propsData)
      expect(result).to.not.have.property('eventsData')
      expect(result).to.not.have.property('slots')
    }
  })

  it('should buildWidget with eventsData', () => {

    const result = buildWidget(mock.E.widget, mock.registry, mock.E.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('component').that.equal(mock.E.expected.component)
    expect(result).to.have.property('context').that.deep.equal(mock.E.expected.context)
    expect(result).to.not.have.property('propsData')
    expect(result).to.have.property('eventsData').that.deep.equal(mock.E.expected.eventsData)
    expect(result).to.not.have.property('slots')
  })

  it('should buildChildren', () => {

    const tests = [
      {
        children: [],
        expected: []
      },
      {
        children: [ mock.A.widget ],
        context: mock.A.context,
        expected: [ mock.A.expected ]
      },
      {
        children: [ mock.B.widget, mock.B.widget ],
        context: mock.B.context,
        expected: [ mock.B.expected, mock.B.expected ]
      },
      {
        children: [ mock.C.widget, mock.C.widget ],
        context: mock.C.context,
        expected: [ mock.C.expected, mock.C.expected ]
      },
      {
        children: [ mock.D.widget, mock.D.widget ],
        context: mock.D.context,
        expected: [ mock.D.expected, mock.D.expected ]
      },
      {
        children: [ mock.E.widget, mock.E.widget ],
        context: mock.E.context,
        expected: [ mock.E.expected, mock.E.expected ]
      }
    ]

    for (let { children, context, expected } of tests) {

      const result = buildChildren(children, mock.registry, context)

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

    const original = mock.F.widget.slots
    const result = buildSlots(original, mock.registry, mock.ABCDE.context)
    const expected = mock.F.expected.slots({ i: 5, j: 7 })

    expect(result).to.have.property('default')

    for (let slot in result) {

      expect(result[slot].length).to.equal(original[slot].length)
      expect(result[slot].length).to.equal(expected[slot].length)

      for (let i = 0; i < result[slot].length; i++) {

        const resultItem = result[slot][i]
        const expectedItem = expected[slot][i]

        expect(resultItem).to.have.property('id')
        expect(resultItem).to.have.property('component').that.equal(expectedItem.component)
        expect(resultItem).to.have.property('context').that.deep.equal(mock.F.context)
      }
    }
  })

  it('should buildWidget with slots', () => {

    const result = buildWidget(mock.F.widget, mock.registry, mock.F.context)

    expect(result).to.have.property('id')
    expect(result).to.have.property('component').that.equal(mock.F.expected.component)
    expect(result).to.have.property('context').that.deep.equal(mock.F.expected.context)
    expect(result).to.not.have.property('propsData')
    expect(result).to.not.have.property('eventsData')
    expect(result).to.have.property('slots')

    const original = mock.F.widget.slots
    const evaluated = result.slots({ i: 5, j: 7 })
    const expected = mock.F.expected.slots({ i: 5, j: 7 })

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
})
