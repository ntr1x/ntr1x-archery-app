import { mapState, mapMutations } from 'vuex'

import OutlineItem from './OutlineItem.vue'

export default {
  computed: mapState({
    page: (state) => state.designer.selected.page
  }),
  methods: mapMutations({
    toggle: 'designer/panels/toggle'
  }),
  components: {
    OutlineItem
  }
}
