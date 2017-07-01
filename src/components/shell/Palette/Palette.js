import { mapMutations } from 'vuex'
import Palette from '@/palette'

export default {
  computed: {
    palette: () => Palette
  },
  methods: mapMutations({
    toggle: 'designer/panels/toggle'
  })
}
