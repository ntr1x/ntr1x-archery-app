import AsApp from './AsApp/AsApp.vue'
import AsShell from './AsShell/AsShell.vue'
import AsDock from './AsDock/AsDock.vue'
import AsPane from './AsPane/AsPane.vue'
import AsPalette from './AsPalette/AsPalette.vue'
import AsProperties from './AsProperties/AsProperties.vue'
import AsOutline from './AsOutline/AsOutline.vue'
import AsOutlineItem from './AsOutline/AsOutlineItem.vue'
import AsWidget from './AsWidget/AsWidget.vue'

const components = {
  AsApp,
  AsShell,
  AsDock,
  AsPane,
  AsPalette,
  AsProperties,
  AsWidget,
  AsOutline,
  AsOutlineItem
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
