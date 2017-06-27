<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    flex: 1 1 auto;
  }
</style>

<script>
export default {
  name: 'box',
  title: 'Box',
  props: {
    margin: String,
    padding: String,
    flex: String,
  }
}
</script>
