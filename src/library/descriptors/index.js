import { Descriptor, Property } from '/registry'
import { FontType } from '/library/types'

@Descriptor({ title: 'Text' })
class AwTextDescriptor {

  @Property({ type: String, title: 'Width' })
  width = null

  @Property({ type: String, title: 'Height' })
  height = null

  @Property({ type: FontType, title: 'Font' })
  font = null

  @Property({ type: String, title: 'Text' })
  text = null
}

export default {
  AwTextDescriptor
}
