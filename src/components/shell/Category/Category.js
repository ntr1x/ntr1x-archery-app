export default {
  name: 'category',
  props: {
    title: String,
    defaultOpen: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      open: this.defaultOpen
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
