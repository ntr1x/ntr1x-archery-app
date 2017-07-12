<template>
  <div class="root column-repeater" v-drop>
    <slot v-for="item in items" :item="item" />
  </div>
</template>

<style lang="scss" scoped>
  .root {
    display: flex;
    flex-direction: column;
    position: relative;
  }
</style>

<script>
import { AppearanceMixin, FlexMixin } from '@/widgets/mixins'
import { Drop } from '@/directives'

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
  },
  directives: {
    Drop
  }
}
</script>
