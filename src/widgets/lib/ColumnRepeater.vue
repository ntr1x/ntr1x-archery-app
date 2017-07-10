<template>
  <div class="root column-repeater">
    <slot v-for="item in items" :item="item" />
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
  name: 'column-repeater',
  title: 'Column Repeater',
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
