<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    display: flex;
    flex-direction: column;
  }
</style>

<script>
export default {
  name: 'canvas',
  title: 'Canvas',
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
    },
    justifyContent: {
      type: String,
      title: 'Justify Content',
      category: 'Appearance',
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
      category: 'Appearance',
      options: [
        'stretch',
        'center',
        'flex-start',
        'flex-end',
        'baseline',
        'initial',
        'inherit'
      ]
    },
    background: {
      type: String,
      title: 'Background',
      category: 'Appearance',
      default: 'transparent'
    }
  }
}
</script>
