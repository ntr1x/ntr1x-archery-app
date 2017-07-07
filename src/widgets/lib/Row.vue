<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    display: flex;
  }
</style>

<script>
import { AppearanceMixin, FlexMixin } from '@/widgets/mixins'

export default {
  name: 'row',
  title: 'Row',
  mixins: [AppearanceMixin, FlexMixin]
}
</script>
