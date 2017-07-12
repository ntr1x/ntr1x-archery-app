<template>
  <div class="root row-repeater" v-drop>
    <slot v-for="item in items" :item="item" />
  </div>
</template>

<style type="scss" scoped>
  .root {
    display: flex;
    position: relative;
  }
</style>

<script>
import { AppearanceMixin, FlexMixin } from '@/widgets/mixins'
import { Drop } from '@/directives'

export default {
  name: 'row-repeater',
  title: 'Row Repeater',
  mixins: [AppearanceMixin, FlexMixin],
  props: {
    items: {
      type: Array,
      title: 'Items',
      category: 'Content'
    }
  },
  directives: {
    Drop
  }
}
</script>
