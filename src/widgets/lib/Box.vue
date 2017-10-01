<template>
  <div class="root box" draggable="true" :style="{
    'flex': flex,
    'width': width,
    'height': height,
    'background': background,
    'margin': margin,
    'padding': padding
  }" @dragstart="handleDragstart"  @dragend="handleDragend">
    <slot></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    flex: 1 1 auto;
    position: relative;
  }
</style>

<script>
import { mapActions } from 'vuex'
import { AppearanceMixin, BoxMixin } from 'src/widgets/mixins'

export default {
  name: 'box',
  title: 'Box',
  mixins: [AppearanceMixin, BoxMixin],
  methods: {
    ...mapActions({
      handleDragstart: 'editor/dragstart',
      handleDragend: 'editor/dragend'
    })
  }
}
</script>

<icon test="blabla" a-foo="bbb" src="material-design-icons/social/svg/production/ic_cake_24px.svg"></icon>
