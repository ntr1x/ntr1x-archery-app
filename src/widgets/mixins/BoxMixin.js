export default {
  props: {
    flex: {
      type: String,
      title: 'Flex',
      default: '0 0 auto',
      category: 'Box'
    },
    width: {
      type: String,
      title: 'Width',
      category: 'Box'
    },
    height: {
      type: String,
      title: 'Height',
      category: 'Box'
    },
    margin: {
      type: String,
      title: 'Margin',
      default: 'auto',
      category: 'Box'
    },
    padding: {
      type: String,
      title: 'Padding',
      default: 'auto',
      category: 'Box'
    }
  },
  events: {
    render: {
      type: Function
    }
  }
}
