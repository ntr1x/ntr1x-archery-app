import { Factory } from '@/registry'
import Descriptors from '@/library/descriptors'

@Factory({
  title: 'Text',
  icon: '/registry/img/aw-text.png'
})
class AwTextFactory {
  build = () => Object.assign(new Descriptors.TextDescriptor(), {
    text: 'Hello World!'
  })
}

export default {
  AwTextFactory
}
