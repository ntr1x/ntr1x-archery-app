import AwCanvas from './AwCanvas/AwCanvas.vue'
import AwHeading from './AwHeading/AwHeading.vue'
import AwIcon from './AwIcon/AwIcon.vue'
import AwPicture from './AwPicture/AwPicture.vue'
import AwStack from './AwStack/AwStack.vue'
import AwText from './AwText/AwText.vue'

const components = {
  AwCanvas,
  AwHeading,
  AwIcon,
  AwPicture,
  AwStack,
  AwText
}

const install = (Vue) => {
  for (let i in components) {
    const component = components[i]
    Vue.component(component.name, component)
  }
}

export default {
  install,
  ...components
}
