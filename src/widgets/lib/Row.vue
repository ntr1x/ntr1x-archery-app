<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    display: flex;
  }
</style>

<script>
export default {
  name: 'row',
  title: 'Row',
  props: {
    justifyContent: String,
    alignItems: String
  }
}
</script>
