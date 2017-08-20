import { mapState, mapActions } from 'vuex'
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
  created () {
  },
  mounted () {
    this.$refs.content.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleScroll)
    this.editor({ editor: this.$el, content: this.$refs.content })
    this.$refs.outer.addEventListener('scroll', this.handleScroll)
    this.$refs.content.addEventListener('dragenter', this.handleDragenter)
    this.$refs.content.addEventListener('dragleave', this.handleDragleave)
    this.$refs.content.addEventListener('dragover', this.handleDragover)
    this.$refs.content.addEventListener('drop', this.handleDrop)
    this.$refs.content.addEventListener('mousemove', this.handleMousemove)

    this.unsubscibe = this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'designer/viewport/dimensions':
        case 'designer/viewport/zoom':
        case 'designer/panels/toggle':
        case 'designer/widgets/property':
          this.$nextTick(() => {
            this.handleScroll()
          })
          break
      }
    })
  },
  beforeDestroy () {
    this.unsubscibe()
    window.removeEventListener('resize', this.handleScroll)
    this.$refs.content.removeEventListener('scroll', this.handleScroll)
    this.$refs.outer.removeEventListener('scroll', this.handleScroll)
    this.$refs.content.removeEventListener('dragenter', this.handleDragenter)
    this.$refs.content.removeEventListener('dragleave', this.handleDragleave)
    this.$refs.content.removeEventListener('dragover', this.handleDragover)
    this.$refs.content.removeEventListener('drop', this.handleDrop)
    this.$refs.content.removeEventListener('mousemove', this.handleMousemove)
    this.editor({ editor: null, content: null })
  },
  methods: {
    ...mapActions({
      editor: 'editor/editor',
      handleLock: 'editor/lock',
      handleScroll: 'editor/scroll',
      handleDragenter: 'editor/dragenter',
      handleDragleave: 'editor/dragleave',
      handleDragover: 'editor/dragover',
      handleDrop: 'editor/drop'
    }),
    handleMousemove (e) {
      // console.log(e)
    }
  }
}
