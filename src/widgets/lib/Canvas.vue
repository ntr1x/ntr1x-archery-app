<template>
  <div class="root canvas" v-drop:column :style="{
    flex: flex,
    width: width,
    height: height,
    background: background,
    margin: margin,
    padding: padding
  }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .root.canvas {
    display: flex !important;
    flex-direction: column !important;
    position: relative !important;
    box-sizing: border-box !important;
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
