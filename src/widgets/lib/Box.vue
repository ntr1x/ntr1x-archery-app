<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    flex: 1 1 auto;
  }
</style>

<script>
import { BoxMixin } from '@/widgets/mixins'

export default {
  name: 'box',
  title: 'Box',
  mixins: [BoxMixin]
}
</script>

<icon test="blabla" a-foo="bbb" src="material-design-icons/social/svg/production/ic_cake_24px.svg"></icon>
