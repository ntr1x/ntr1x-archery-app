import { mapMutations } from 'vuex'

import PaletteItem from './PaletteItem.vue'
import palette from '@/palette'

export default {
  components: {
    PaletteItem
  },
  computed: {
    palette: () => palette
  },
  methods: {
    ...mapMutations({
      toggle: 'designer/panels/toggle'
    })
  }
}
