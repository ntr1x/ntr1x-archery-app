<template>
  <section class="root drop-area-stack">
    <drop-area v-for="item in stack" :mode="item.mode" :area="item.area" :bounds="item.bounds" :children="item.children" :key="item.id" />
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
