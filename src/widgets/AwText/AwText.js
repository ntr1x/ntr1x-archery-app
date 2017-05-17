const FontDescriptor = {
  title: 'Font',
  type: Object,
  props: {
    family: {
      type: String,
      title: 'Font Family'
    },
    weight: {
      type: String,
      title: 'Font Weight'
    },
    size: {
      type: String,
      title: 'Font Size'
    }
  }
}

const BoxDescriptor = {
  title: 'Box',
  type: Object,
  props: {
    margin: {
      type: String,
      title: 'Margin'
    },
    padding: {
      type: String,
      title: 'Padding'
    },
    background: {
      type: String,
      title: 'Background'
    },
    border: {
      type: String,
      title: 'Border'
    }
  }
}

export default {
  name: 'aw-text',
  icon: 'fa fa-align-left',
  title: 'Text',
  props: {
    font: FontDescriptor,
    text: {
      type: String,
      title: 'Text'
    },
    width: {
      type: String,
      title: 'Width'
    },
    height: {
      type: String,
      title: 'Height'
    },
    outer: {
      ...BoxDescriptor,
      title: 'Outer Box'
    },
    inner: {
      ...BoxDescriptor,
      title: 'Inner Box'
    }
  }
}
