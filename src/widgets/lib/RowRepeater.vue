<template>
  <div class="root row-repeater">
    <slot name="item" v-for="item in items" :item="item"></slot>
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
