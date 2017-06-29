import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      toggle: 'designer/panels/toggle',
      modal: 'modals/open'
    }),
    edit () {
      this.modal({
        factory: () => require('@/modals/Expression/Expression.vue')
      })
    }
  }
}
