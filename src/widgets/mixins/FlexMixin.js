export default {
  props: {
    justifyContent: {
      type: String,
      title: 'Justify Content',
      category: 'Layout',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
      ]
    },
    alignItems: {
      type: String,
      title: 'Align Items',
      category: 'Layout',
      options: [
        'stretch',
        'center',
        'flex-start',
        'flex-end',
        'baseline',
        'initial',
        'inherit'
      ]
    }
  }
}
