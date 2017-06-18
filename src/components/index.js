// import AsApp from './AsApp/AsApp.vue'
// import AsShell from './AsShell/AsShell.vue'
// import AsPalette from './AsPalette/AsPalette.vue'
// import AsProperties from './AsProperties/AsProperties.vue'
// import AsOutline from './AsOutline/AsOutline.vue'
// import AsOutlineItem from './AsOutline/AsOutlineItem.vue'
// import AsWidget from './AsWidget/AsWidget.vue'
// import AsProxy from './AsProxy/AsProxy.vue'
// import AsModalStack from './AsModal/AsModalStack.vue'
// import AsModal from './AsModal/AsModal.vue'
// import AsPropertyModalString from './AsProperties/AsPropertyModalString.vue'
// import AsScrollable from './AsScrollable/AsScrollable.vue'
// import AsEditor from './AsEditor/AsEditor.vue'

const components = {
  // AsApp,
  // AsShell,
  // AsEditor,
  // AsPalette,
  // AsProperties,
  // AsWidget,
  // AsProxy,
  // AsOutline,
  // AsOutlineItem,
  // AsModalStack,
  // AsModal
  // AsPropertyModalString,
  // AsScrollable
}

export default {

  ...components,

  install: (Vue) => {
    for (let i in components) {
      const component = components[i]
      Vue.component(component.name, component)
    }
  }
}
