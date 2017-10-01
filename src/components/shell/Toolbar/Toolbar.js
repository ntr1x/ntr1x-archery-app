import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    dimensions: () => ({
      pc: { name: 'pc', position: 'absolute', width: '100%', height: '100%' },
      tablet: { name: 'tablet', position: 'relative', width: '768px', height: '1024px' },
      phone: { name: 'phone', position: 'relative', width: '414px', height: '736px' },
      custom: { name: 'custom', position: 'relative', width: '1280px', height: '780px' }
    }),
    ...mapState({
      active: state => state.designer.dimensions,
      scale: state => state.designer.scale
    })
  },
  methods: {
    ...mapActions({
      scroll: 'editor/scroll'
    }),
    ...mapMutations({
      viewport: 'designer/viewport/dimensions',
      zoom: 'designer/viewport/zoom',
      modal: 'modals/open'
    }),
    newPage () {
      this.modal({
        factory: () => require('src/modals/Page/Page.vue')
      })
    }
  }
}
