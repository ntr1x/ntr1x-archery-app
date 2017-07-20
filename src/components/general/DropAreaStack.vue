<template>
  <section class="root drop-area-stack">
    <div class="clip" :style="{
      clip: clip
    }">
      <drop-area v-for="item in stack" :mode="item.mode" :area="item.area" :children="item.children" :key="item.id" />
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
        if (!state.editor.content) {
          return null
        }
        const bounds = state.editor.content().getBoundingClientRect()
        return `rect(${bounds.top}px, ${bounds.right}px, ${bounds.bottom}px, ${bounds.left}px)`
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
    z-index: 200;

    >.clip {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }
  }
</style>
