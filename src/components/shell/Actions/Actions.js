import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      widget: (state) => state.editor.selection
    })
  }
}
