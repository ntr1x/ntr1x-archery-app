import { mapState } from 'vuex'

import ShellHeader from '../Header/Header.vue'
import ShellFooter from '../Footer/Footer.vue'
import ShellProperties from '../Properties/Properties.vue'
import ShellToolbar from '../Toolbar/Toolbar.vue'
import ShellActions from '../Actions/Actions.vue'
import ShellStructure from '../Structure/Structure.vue'
import ShellPalette from '../Palette/Palette.vue'
import ShellOutline from '../Outline/Outline.vue'
import ShellConsole from '../Console/Console.vue'
import ShellEditor from '../Editor/Editor.vue'

export default {
  components: {
    ShellHeader,
    ShellFooter,
    ShellToolbar,
    ShellActions,
    ShellProperties,
    ShellStructure,
    ShellPalette,
    ShellOutline,
    ShellConsole,
    ShellEditor
  },
  computed: mapState({
    palette: state => state.designer.panels.palette,
    outline: state => state.designer.panels.outline,
    properties: state => state.designer.panels.properties,
    structure: state => state.designer.panels.structure,
    console: state => state.designer.panels.console
  })
}
