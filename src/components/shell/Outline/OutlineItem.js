import { mapState, mapActions } from 'vuex'

export default {
  name: 'outline-item',
  props: {
    item: Object,
    slotName: String,
    level: Number
  },
  computed: {
    ...mapState({
      selected: (state) => state.editor.selection
    })
  },
  data () {
    return {
      open: this.level < 1
    }
  },
  methods: {
    ...mapActions({
      select: 'editor/select'
    }),
    toggle () {
      this.open = !this.open
    }
  }
}
