<template>
  <div class="root">
    <slot name="default"></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    display: flex;
    flex-direction: column;
    min-height: 200px;
    position: relative;
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
