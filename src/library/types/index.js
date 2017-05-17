import { Type, Property } from '@/registry'

@Type({ title: 'Font' })
class FontType {

  @Property(String, 'Size')
  size = null

  @Property(String, 'Family')
  family = null

  @Property(String, 'Weight')
  weight = null
}

export default {
  FontType
}
