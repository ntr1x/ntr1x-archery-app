import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState({
    pages: state => state.designer.portal.pages
  }),
  methods: {
    ...mapMutations({
      toggle: 'designer/panels/toggle',
      modal: 'modals/open'
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
