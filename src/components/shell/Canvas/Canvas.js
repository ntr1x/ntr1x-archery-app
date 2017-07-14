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
          stack.push([element, element.__area__.drop])
        }
        element = element.parentElement
      }

      const clip = this.$el.getBoundingClientRect()
      const bounds = { top: clip.top, right: clip.right, bottom: clip.bottom, left: clip.left }
      this.updateDropAreas(stack.map(([element, mode]) => {
        const rect = element.getBoundingClientRect()
        const children = []
        if (element.children) {
          for (let i = 0; i < element.children.length; i++) {
            const child = element.children[i].getBoundingClientRect()
            children.push({
              top: child.top,
              right: child.right,
              bottom: child.bottom,
              left: child.left
            })
          }
        }
        return {
          mode,
          bounds,
          area: { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left },
          children
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
      if (this.counter) {
        e.preventDefault()
      }
    },
    handleDrop (e) {
      this.counter = 0
      this.updateDropAreas([])
      e.preventDefault()
    }
  }
}
