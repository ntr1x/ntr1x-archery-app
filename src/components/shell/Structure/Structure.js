import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: mapState({
    pages: state => state.designer.portal.pages
  }),
  methods: {
    ...mapMutations({
      toggle: 'designer/panels/toggle',
      modal: 'modals/open'
    }),
    ...mapActions({
      removePage: 'designer/pages/remove'
    }),
    newPage () {
      this.modal({
        factory: () => require('@/modals/Page/Page.vue')
      })
    },
    editPage (page) {
      this.modal({
        factory: () => require('@/modals/Page/Page.vue'),
        data: {
          page
        }
      })
    }
  }
}
