<template>
  <section class="root drop-area-stack">
    <drop-area v-for="item in stack" :area="item.area" :key="item.id"></drop-area>
  </section>
</template>

<script>
export default {
  props: {
    stack: Array
  },
  components: {
    DropArea: require('./DropArea')
  }
}
</script>

<style scoped lang="scss">
  .root.drop-area-stack {
    position: relative;
    overflow: visible;
    z-index: 100;
  }
</style>
