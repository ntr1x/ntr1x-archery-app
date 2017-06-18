// import Vue from 'vue'

const FontDescriptor = {
  title: 'Font',
  category: 'Font',
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
    },
    bla: Number
  }
}

const BoxDescriptor = {
  title: 'Box',
  type: Object,
  props: {
    margin: {
      type: String,
      title: 'Margin',
      category: 'Layout'
    },
    padding: {
      type: String,
      title: 'Padding',
      category: 'Layout'
    },
    background: {
      type: String,
      title: 'Background',
      category: 'Appearance'
    },
    border: {
      type: String,
      title: 'Border',
      category: 'Appearance'
    }
  }
}

let FooMixin = {
  props: {
    fooDemo1: String,
    fooDemo2: {
      type: Number
    }
  }
}

let BarMixin = {
  props: {
    barDemo1: String,
    barDemo2: {
      type: Number
    }
  }
}

let BuzMixin = {
  props: [
    'helloProp', 'goodby-prop'
  ]
}

export default {
  name: 'aw-text',
  icon: 'fa fa-align-left',
  title: 'Text',
  mixins: [ FooMixin, BarMixin, BuzMixin ],
  props: {
    font: {
      type: Object,
      descriptor: FontDescriptor
    },
    text: {
      type: String,
      title: 'Text',
      category: 'Content'
    },
    width: {
      type: String,
      title: 'Width',
      category: 'Layout'
    },
    height: {
      type: String,
      title: 'Height',
      category: 'Layout'
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
