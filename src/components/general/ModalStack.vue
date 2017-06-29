<template>
  <section class="root">
    <modal v-for="modal in stack" :modal="modal" :key="modal"></modal>
  </section>
</template>

<script>
export default {
  props: {
    stack: Array
  },
  components: {
    Modal: require('./Modal')
  }
}
</script>

<style scoped lang="scss">
  .root {
    position: relative;
    overflow: visible;
    z-index: 100;

    // >* {
    //   opacity: 0.5;
    //
    //   &:last-child {
    //     opacity: 1;
    //   }
    // }
  }
</style>
