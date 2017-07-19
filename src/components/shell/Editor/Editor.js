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
  mounted () {
    this.editor(this.$el)
    this.$refs.content.addEventListener('scroll', this.handleScroll)
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
    this.$refs.content.removeEventListener('scroll', this.handleScroll)
    this.editor(null)
  },
  methods: {
    ...mapActions({
      editor: 'editor/editor',
      handleScroll: 'editor/scroll',
      handleDragenter: 'editor/dragenter',
      handleDragleave: 'editor/dragenter',
      handleDragover: 'editor/dragenter',
      handleDrop: 'editor/dragenter'
    })
  }
}
