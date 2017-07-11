import { mapMutations } from 'vuex'
import { Focus } from '@/directives'

export default {
  methods: mapMutations({
    close: 'modals/close'
  }),
  directives: {
    Focus
  }
}
