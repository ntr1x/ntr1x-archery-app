import { mapState, mapMutations, mapActions } from 'vuex'

import Category from '../Category/Category.vue'
import PageModal from '@/modals/Page/Page.vue'
import PropModal from '@/modals/Prop/Prop.vue'
import EndpointModal from '@/modals/Endpoint/Endpoint.vue'
import SchemeModal from '@/modals/Scheme/Scheme.vue'

export default {
  computed: mapState({
    pages: state => state.designer.portal.pages,
    props: state => state.designer.selected.page && state.designer.selected.page.props,
    selectedPage: state => state.designer.selected.page
  }),
  components: {
    Category
  },
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
    importRemotes () {
      this.modal({
        factory: () => SchemeModal
      })
    },
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
    newEndpoint () {
      this.modal({
        factory: () => EndpointModal
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
