import { mapMutations } from 'vuex'
import { Focus } from '@/directives'
import * as controls from '@/components/controls'

export default {
  props: {
    type: String, // 'prop' | 'event'
    widget: Object,
    property: Object,
    value: String
  },
  data () {
    return {
      context: null
    }
  },
  created () {
    this.context = Object.entries(this.widget.context).reduce((target, [key, value]) => {
      if (typeof value === 'function') {
        target[key] = `${key}()`
      } else {
        target[key] = value
      }
      return target
    }, {})
  },
  methods: mapMutations({
    close: 'modals/close'
  }),
  components: {
    ...controls
  },
  directives: {
    Focus
  }
}
