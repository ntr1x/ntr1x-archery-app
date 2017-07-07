import { mapState, mapMutations } from 'vuex'

export default {
  name: 'outline-item',
  props: {
    item: Object,
    slotName: String,
    level: Number
  },
  computed: {
    ...mapState({
      selected: (state) => state.designer.selected.widget
    })
  },
  data () {
    return {
      open: this.level < 1
    }
  },
  methods: {
    ...mapMutations({
      select: 'designer/widgets/select'
    }),
    toggle () {
      this.open = !this.open
    }
  }
}
