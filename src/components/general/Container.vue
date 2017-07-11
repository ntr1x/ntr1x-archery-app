<script>
export default {
  name: 'container',
  abstract: true,
  props: {
  },
  render () {
    return this.$slots.default[0]
  },
  mounted () {
    console.log('Container mounted')

    this.$el.addEventListener('dragenter', this.handleDragenter)
    this.$el.addEventListener('dragleave', this.handleDragleave)
    this.$el.addEventListener('dragover', this.handleDragover)
    this.$el.addEventListener('drop', this.handleDrop)
  },
  beforeDestroy () {

    this.$el.removeEventListener('dragenter', this.handleDragenter)
    this.$el.removeEventListener('dragleave', this.handleDragleave)
    this.$el.removeEventListener('dragover', this.handleDragover)
    this.$el.removeEventListener('drop', this.handleDrop)

    console.log('Container beforeDestroy')
  },
  methods: {
    handleDragenter (e) {
      e.target.style['box-shadow'] = 'rgba(255, 255, 255, 0.360784) 0px 1px 0px 0px inset, blue 0px 0px 0px 2px'
      console.log('dragenter', e.target.getBoundingClientRect())
    },
    handleDragleave (e) {
      e.target.style['box-shadow'] = null
      console.log('dragleave', e.target.getBoundingClientRect())
    },
    handleDragover (e) {
      if (e.target === this.$el) {
        console.log('asd')
        e.preventDefault()
      }
    },
    handleDrop (e) {
      e.preventDefault()
      // const data = await this.transferRetrieve()
      console.log('drop', e.target.getBoundingClientRect())
    }
  }
}
</script>
