<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    display: flex;
    flex-direction: column;
  }
</style>

<script>
import { AppearanceMixin, FlexMixin } from '@/widgets/mixins'

export default {
  name: 'column',
  title: 'Column',
  mixins: [AppearanceMixin, FlexMixin]
}
</script>
