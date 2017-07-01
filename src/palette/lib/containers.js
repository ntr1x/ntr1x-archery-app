export const HorizontalStack = {
  title: 'Horizontal Stack',
  icon: require('material-design-icons/action/svg/production/ic_view_column_24px.svg'),
  factory: () => null
}

export const HorizontalRepeater = {
  title: 'Horizontal Repeater',
  icon: require('material-design-icons/action/svg/production/ic_view_column_24px.svg'),
  factory: () => null
}

export const VerticalStack = {
  title: 'Vertical Stack',
  icon: require('material-design-icons/action/svg/production/ic_view_stream_24px.svg'),
  factory: () => null
}

export const VerticalRepeater = {
  title: 'Vertical Repeater',
  icon: require('material-design-icons/action/svg/production/ic_view_stream_24px.svg'),
  factory: () => null
}

export const LayersStack = {
  title: 'Layers Stack',
  icon: require('material-design-icons/maps/svg/production/ic_layers_24px.svg'),
  factory: () => null
}

export const LayersRepeater = {
  title: 'Layers Repeater',
  icon: require('material-design-icons/maps/svg/production/ic_layers_24px.svg'),
  factory: () => null
}

export const Containers = {
  title: 'Containers',
  items: [
    HorizontalStack,
    HorizontalRepeater,
    VerticalStack,
    VerticalRepeater,
    LayersStack,
    LayersRepeater
  ]
}

export default Containers
