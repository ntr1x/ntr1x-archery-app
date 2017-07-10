<template>
  <div class="root row-repeater">
    <slot v-for="(item, key) in items" :value="value" :key="key">
      <box></box>
    </slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    display: flex;
  }
</style>

<script>
import { AppearanceMixin, FlexMixin } from '@/widgets/mixins'
import { Box } from './Box'

export default {
  name: 'row',
  title: 'Row Repeater',
  mixins: [AppearanceMixin, FlexMixin],
  props: {
    items: {
      type: Array,
      title: 'Items',
      category: 'Content'
    }
  }
}
</script>
