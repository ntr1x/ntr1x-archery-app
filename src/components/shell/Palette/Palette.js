import { mapMutations } from 'vuex'

import PaletteItem from './PaletteItem.vue'
import Category from '../Category/Category.vue'
import palette from '@/palette'

export default {
  components: {
    PaletteItem,
    Category
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
