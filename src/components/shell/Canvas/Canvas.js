import { mapState, mapMutations } from 'vuex'
import Widget from '@/components/general/Widget'

export default {
  components: {
    Widget
  },
  computed: mapState({
    page: (state) => state.designer.selected.page,
    dimensions: state => state.designer.dimensions,
    scale: state => state.designer.scale
  }),
  data: () => ({
    counter: 0
  }),
  mounted () {
    console.log('Container mounted')

    this.$el.addEventListener('dragenter', this.handleDragenter)
    this.$el.addEventListener('dragleave', this.handleDragleave)
    this.$el.addEventListener('dragover', this.handleDragover)
    this.$el.addEventListener('drop', this.handleDrop)

    console.log(this)
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
      updateDropAreas: 'dropAreas/update'
    }),
    refreshDropAreas (e) {
      let element = e.target
      const stack = []
      while (element.parentElement != null) {
        // console.log(element)
        if (element.__area__) {
          stack.push(element)
        }
        element = element.parentElement
      }

      const clipRect = this.$el.getBoundingClientRect()
      const clip = {
        top: clipRect.top + 'px',
        left: clipRect.left + 'px',
        right: clipRect.right + 'px',
        bottom: clipRect.bottom + 'px'
      }

      this.updateDropAreas(stack.map(element => {
        const rect = element.getBoundingClientRect()
        return {
          clip,
          area: {
            top: rect.top + 'px',
            left: rect.left + 'px',
            width: (rect.right - rect.left) + 'px',
            height: (rect.bottom - rect.top) + 'px'
          }
        }
      }))
    },
    handleDragenter (e) {
      this.counter++
      this.refreshDropAreas(e)
    },
    handleDragleave (e) {
      this.counter--
      if (!this.counter) {
        this.updateDropAreas([])
      }
    },
    handleDragover (e) {
      if (e.target === this.$el) {
        e.preventDefault()
      }
    },
    handleDrop (e) {
      e.preventDefault()
      // const data = await this.transferRetrieve()
      // console.log('drop')
    }
  }
}
