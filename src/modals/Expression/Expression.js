import { mapMutations } from 'vuex'
import Focus from '@/directives/Focus'

export default {
  methods: mapMutations({
    close: 'modals/close'
  }),
  directives: {
    Focus
  }
}
