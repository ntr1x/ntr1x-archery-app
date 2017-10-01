<template>
  <section class="root selection-stack">
    <div class="clip-inner" :style="{ clip: innerClip }">
      <selection v-for="item in stack" :area="item.area" :index="item.index" :count="stack.length" :key="item.id" />
    </div>
    <div class="clip-outer" :style="{ clip: outerClip }" v-if="stack.length > 0">
      <selection-actions :area="stack[0].area" :key="stack[0].id" />
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
      },
      outerClip: (state) => {
        const outerBounds = state.editor.outerBounds
        return outerBounds
          ? `rect(${outerBounds.top}px, ${outerBounds.right}px, ${outerBounds.bottom}px, ${outerBounds.left}px)`
          : null
      }
    })
  },
  components: {
    Selection: require('./Selection'),
    SelectionActions: require('./SelectionActions')
  }
}
</script>

<style scoped lang="scss">
  .root.selection-stack {
    position: relative;
    overflow: visible;
    z-index: 100;

    >.clip-inner {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }

    >.clip-outer {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }
  }
</style>
