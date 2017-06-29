import { mapMutations } from 'vuex'
import Focus from '@/directives/Focus'

export default {
  methods: {
    ...mapMutations({
      close: 'modals/close',
      modal: 'modals/open'
    }),
    edit () {
      this.modal({
        factory: () => require('@/modals/Expression/Expression.vue')
      })
    }
  },
  directives: {
    Focus
  }
}
