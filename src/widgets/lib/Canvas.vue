<template>
  <div class="root canvas" v-drop:column :style="{
    flex: flex,
    width: width,
    height: height,
    background: background,
    margin: margin,
    padding: padding,
    justifyContent: justifyContent,
    alignItems: alignItems
  }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .root.canvas {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: visible;
    box-sizing: border-box;
  }
</style>

<script>
import { AppearanceMixin, BoxMixin, FlexMixin } from '@/widgets/mixins'
import { Drop } from '@/directives'
import { mapActions } from 'vuex'

export default {
  name: 'canvas',
  title: 'Canvas',
  mixins: [AppearanceMixin, BoxMixin, FlexMixin],
  directives: {
    Drop
  },
  methods: {
    ...mapActions({
      transferRetrieve: 'designer/transfer/retrieve'
    })
  }
}
</script>
