import { mapState } from 'vuex'

export default {
  computed: mapState({
    dimensions: state => state.designer.dimensions
  })
}
