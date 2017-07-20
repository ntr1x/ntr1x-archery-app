<template>
  <section class="root selection-stack">
    <div class="clip" :style="{ clip: clip }">
      <selection v-for="item in stack" :area="item.area" :title="item.title" :index="item.index" :count="stack.length" :key="item.id" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    stack: Array
  },
  computed: {
    ...mapState({
      clip: (state) => {
        const bounds = state.editor.bounds
        return bounds
          ? `rect(${bounds.top}px, ${bounds.right}px, ${bounds.bottom}px, ${bounds.left}px)`
          : null
      }
    })
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

    >.clip {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }
  }
</style>
