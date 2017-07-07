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
  name: 'canvas',
  title: 'Canvas',
  mixins: [AppearanceMixin, FlexMixin]
}
</script>
