export default {
  name: 'as-properties-category',
  props: {
    title: String
  },
  data: () => ({
    open: true
  }),
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
