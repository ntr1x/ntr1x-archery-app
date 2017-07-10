<template>
  <div class="root" :style="{
    'flex': flex,
    'width': width,
    'height': height,
    'background': background,
    'margin': margin
  }">
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
import { AppearanceMixin, BoxMixin } from '@/widgets/mixins'

export default {
  name: 'box',
  title: 'Box',
  mixins: [AppearanceMixin, BoxMixin]
}
</script>

<icon test="blabla" a-foo="bbb" src="material-design-icons/social/svg/production/ic_cake_24px.svg"></icon>
