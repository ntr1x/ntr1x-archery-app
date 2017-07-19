<template>
  <section class="root selection-stack">
    <selection v-for="item in stack" :area="item.area" :bounds="item.bounds" :title="item.title" :index="item.index" :count="stack.length" :key="item.id" />
  </section>
</template>

<script>
export default {
  props: {
    stack: Array
  },
  components: {
    Selection: require('./Selection')
  }
}
</script>

<style scoped lang="scss">
  .root.selection-stack {
    position: relative;
    overflow: visible;
    z-index: 100;
  }
</style>
