import Vue from 'vue'
import { mapState } from 'vuex'

import AsPropertiesCategory from './AsPropertiesCategory.vue'

export default {
  name: 'as-properties',
  components: {
    'as-properties-category': AsPropertiesCategory
  },
  data: () => ({
    path: null
  }),
  computed: {
    ...mapState({
      selection: state => {
        let selection = state.designer.selection
        if (!selection) return null
        let widget = selection
        let name = widget.name
        let component = Vue.component(name) || null
        let title = component == null
          ? `<${name} />`
          : ('title' in component.options ? component.options.title : `<${name} />`)
        return {
          widget,
          component,
          name,
          title
        }
      },
      selectionPath: state => {
        let selection = state.designer.selection
        if (!selection) return null
        let path = []
        for (let p = selection.parent; p.parent != null; p = p.parent) {
          let widget = p
          let name = widget.name
          let component = Vue.component(name) || null
          let title = component == null
            ? `<${name} />`
            : ('title' in component.options ? component.options.title : `<${name} />`)
          path.unshift({
            widget,
            component,
            name,
            title
          })
        }
        return path
      }
    })
  }
}
