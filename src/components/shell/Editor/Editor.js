import { mapState, mapActions } from 'vuex'
import { throttle } from 'lodash'
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
    this.handleScrollDebounced = throttle(this.handleScroll, 200)
  },
  mounted () {
    this.editor({ editor: this.$el, content: this.$refs.content })
    this.$refs.content.addEventListener('scroll', this.handleScrollDebounced)
    this.$refs.outer.addEventListener('scroll', this.handleScrollDebounced)
    this.$refs.content.addEventListener('dragenter', this.handleDragenter)
    this.$refs.content.addEventListener('dragleave', this.handleDragleave)
    this.$refs.content.addEventListener('dragover', this.handleDragover)
    this.$refs.content.addEventListener('drop', this.handleDrop)
  },
  beforeDestroy () {
    this.$refs.content.removeEventListener('scroll', this.handleScrollDebounced)
    this.$refs.outer.removeEventListener('scroll', this.handleScrollDebounced)
    this.$refs.content.removeEventListener('dragenter', this.handleDragenter)
    this.$refs.content.removeEventListener('dragleave', this.handleDragleave)
    this.$refs.content.removeEventListener('dragover', this.handleDragover)
    this.$refs.content.removeEventListener('drop', this.handleDrop)
    this.editor({ editor: null, content: null })
  },
  methods: {
    ...mapActions({
      editor: 'editor/editor',
      handleScroll: 'editor/scroll',
      handleDragenter: 'editor/dragenter',
      handleDragleave: 'editor/dragleave',
      handleDragover: 'editor/dragover',
      handleDrop: 'editor/drop'
    })
  }
}
