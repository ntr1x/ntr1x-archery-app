import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState({
    palette: state => state.designer.panels.palette,
    outline: state => state.designer.panels.outline,
    properties: state => state.designer.panels.properties,
    structure: state => state.designer.panels.structure,
    console: state => state.designer.panels.console
  }),
  methods: mapMutations({
    toggle: 'designer/panels/toggle'
  })
}
