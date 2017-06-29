import { mapState, mapMutations } from 'vuex'

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
    ...mapMutations({
      viewport: 'designer/viewport/dimensions',
      zoom: 'designer/viewport/zoom',
      toggle: 'designer/panels/toggle',
      modal: 'modals/open'
    }),
    newPage () {
      this.modal({
        factory: () => require('@/modals/Page/Page.vue')
      })
    }
  }
}
