import { mapState, mapMutations, mapActions } from 'vuex'

import PageModal from '@/modals/Page/Page.vue'
import PropModal from '@/modals/Prop/Prop.vue'

export default {
  computed: mapState({
    pages: state => state.designer.portal.pages,
    props: state => state.designer.selected.page && state.designer.selected.page.props,
    selectedPage: state => state.designer.selected.page
  }),
  methods: {
    ...mapMutations({
      toggle: 'designer/panels/toggle',
      modal: 'modals/open',
      selectPage: 'designer/pages/select'
    }),
    ...mapActions({
      removePage: 'designer/pages/remove',
      removeProp: 'designer/props/remove'
    }),
    newPage () {
      this.modal({
        factory: () => PageModal
      })
    },
    newProp () {
      this.modal({
        factory: () => PropModal
      })
    },
    editPage (page) {
      this.modal({
        factory: () => PageModal,
        data: {
          page
        }
      })
    },
    editProp (prop) {
      this.modal({
        factory: () => PropModal,
        data: {
          prop
        }
      })
    }
  }
}
