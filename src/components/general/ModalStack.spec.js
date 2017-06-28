import Vue from 'vue'
import { expect } from 'chai'
import ModalStack from '@/components/general/ModalStack'
import ModalStub from '@/components/general/ModalStub'

describe('components/general/ModalStack', () => {

  it('should render correct contents when empty', () => {
    const Constructor = Vue.extend(ModalStack)
    const vm = new Constructor({
      propsData: {
        stack: []
      }
    }).$mount()
    expect(vm.$el.children.length).to.equal(0)
  })

  it('should render correct contents with 1 modal', () => {
    const Constructor = Vue.extend(ModalStack)
    const vm = new Constructor({
      propsData: {
        stack: [
          { provider: () => ModalStub }
        ]
      }
    }).$mount()
    expect(vm.$el.children.length).to.equal(1)
  })

  it('should render correct contents with 2 modals', () => {
    const Constructor = Vue.extend(ModalStack)
    const vm = new Constructor({
      propsData: {
        stack: [
          { provider: () => ModalStub },
          { provider: () => ModalStub }
        ]
      }
    }).$mount()
    expect(vm.$el.children.length).to.equal(2)
  })
})
