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
  props: {
    justifyContent: String,
    alignItems: String,
  }
}
</script>
