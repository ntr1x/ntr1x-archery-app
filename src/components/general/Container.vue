<script>
import { mapMutations } from 'vuex'

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
    ...mapMutations({
      enterArea: 'dropAreas/enter',
      leaveArea: 'dropAreas/leave'
    }),
    handleDragenter (e) {
      // if (e.target !== this.$el) {
      //   e.preventDefault()
      //   return
      // }
      const rect = e.target.getBoundingClientRect()
      this.enterArea({
        top: rect.top + 'px',
        left: rect.left + 'px',
        width: (rect.right - rect.left) + 'px',
        height: (rect.bottom - rect.top) + 'px'
      })
      e.target.style['box-shadow'] = 'rgba(255, 255, 255, 0.360784) 0px 1px 0px 0px inset, blue 0px 0px 0px 2px'
      // e.target.style['pointer-events'] = 'none'
      console.log('dragenter')
    },
    handleDragleave (e) {
      this.leaveArea()
      // if (e.target !== this.$el) {
      //   e.preventDefault()
      //   return
      // }
      e.target.style['box-shadow'] = null
      // e.target.style['pointer-events'] = null
      console.log('dragleave', e)
    },
    handleDragover (e) {
      if (e.target === this.$el) {
        e.preventDefault()
      }
    },
    handleDrop (e) {
      e.preventDefault()
      // const data = await this.transferRetrieve()
      console.log('drop')
    }
  }
}
</script>
