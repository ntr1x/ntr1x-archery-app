<template>
  <section class="modal-stack">
    <overlay v-for="overlay in stack" :overlay="overlay" :key="overlay"></overlay>
  </section>
</template>

<script>
export default {
  name: 'overlay-stack',
  props: {
    stack: Object
  }
}
</script>

<style type="scss" scoped>
  .root {
    position: relative;
    overflow: visible;
    z-index: 100;
  }
</style>
