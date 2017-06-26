export default {
  name: 'outline-item',
  props: {
    item: Object,
    level: Number
  },
  data () {
    return {
      open: this.level < 1
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
