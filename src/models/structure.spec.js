// // @flow
//
// import { expect } from 'chai'
// import type { Portal, Page, Widget, Data } from './structure'
//
// describe('Data', () => {
//
//   it('should be', () => {
//     const data: Data = {
//       key1: 'value1',
//       key2: 'value2'
//     }
//     expect(data.key1).to.equal('value1')
//     expect(data.key2).to.equal('value2')
//   })
// })
//
// describe('Widget', () => {
//
//   it('should be', () => {
//     const widget: Widget = {
//       component: 'demo-component'
//     }
//     expect(widget.component).to.equal('demo-component')
//   })
// })
//
// describe('Page', () => {
//
//   it('should be', () => {
//     const page: Page = {
//       name: 'default',
//       root: {
//         component: 'canvas'
//       }
//     }
//     expect(page.name).to.deep.equal('default')
//   })
// })
//
// describe('Portal', () => {
//
//   it('may be empty', () => {
//     const portal: Portal = {
//       name: 'sample',
//       pages: []
//     }
//     expect(portal.name).to.equal('sample')
//     expect(portal.pages).to.equal([])
//   })
//
//   it('may have a page', () => {
//     const portal: Portal = {
//       name: 'sample',
//       pages: []
//     }
//     expect(portal.name).to.equal('sample')
//     expect(portal.pages).to.equal([])
//   })
// })
