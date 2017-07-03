export const HorizontalStack = {
  title: 'Horizontal Stack',
  icon: { 'class': 'material-icons', content: 'view_column' },
  factory: () => null
}

export const HorizontalRepeater = {
  title: 'Horizontal Repeater',
  icon: { 'class': 'material-icons', content: 'view_column' },
  factory: () => null
}

export const VerticalStack = {
  title: 'Vertical Stack',
  icon: { 'class': 'material-icons', content: 'view_stream' },
  factory: () => null
}

export const VerticalRepeater = {
  title: 'Vertical Repeater',
  icon: { 'class': 'material-icons', content: 'view_stream' },
  factory: () => null
}

export const LayersStack = {
  title: 'Layers Stack',
  icon: { 'class': 'material-icons', content: 'layers' },
  factory: () => null
}

export const LayersRepeater = {
  title: 'Layers Repeater',
  icon: { 'class': 'material-icons', content: 'layers' },
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
