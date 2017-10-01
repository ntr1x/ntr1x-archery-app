<template>
  <section class="root drop-area-stack">
    <div class="clip" :style="{ clip: innerClip }">
      <drop-area v-for="item in stack" :mode="item.mode" :area="item.area" :positions="item.positions" :key="item.id" />
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
      innerClip: (state) => {
        const innerBounds = state.editor.innerBounds
        return innerBounds
          ? `rect(${innerBounds.top}px, ${innerBounds.right}px, ${innerBounds.bottom}px, ${innerBounds.left}px)`
          : null
      }
    })
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

    >.clip {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }
  }
</style>
