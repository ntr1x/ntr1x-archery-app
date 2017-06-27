import palette from '@/engine/palette'

import Canvas from './lib/Canvas.vue'
import Column from './lib/Column.vue'
import Row from './lib/Row.vue'
import Box from './lib/Box.vue'

palette.factory('a-canvas', () => Canvas)
palette.factory('a-column', () => Column)
palette.factory('a-row', () => Row)
palette.factory('a-box', () => Box)

// registry.factory('a-title', () => Wrap(Title, {props}))
// registry.factory('a-text', () => Column)
// registry.factory('a-link', () => Row)
// registry.factory('a-button', () => Box)
// registry.factory('a-image', () => Box)
// registry.factory('a-icon', () => Box)
//
// registry.factory('a-stack-h', () => Box)
// registry.factory('a-stack-v', () => Box)
// registry.factory('a-stack-l', () => Box)
//
// registry.factory('a-repeater-h', () => Box)
// registry.factory('a-repeater-v', () => Box)
// registry.factory('a-repeater-l', () => Box)
