<template>
  <div class="root column-repeater" v-drop:column>
    <slot v-for="item in items" :column="item" />
  </div>
</template>

<style lang="scss" scoped>
  .root {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
  }
</style>

<script>
import { AppearanceMixin, FlexMixin } from 'src/widgets/mixins'
import { Drop } from 'src/directives'

export default {
  name: 'column-repeater',
  title: 'Column Repeater',
  container: true,
  mixins: [AppearanceMixin, FlexMixin],
  props: {
    items: {
      type: Array,
      title: 'Items',
      category: 'Content'
    }
  },
  produces: {
    default: {
      column: {
        type: [ Object, String, Number, Boolean, Function, Symbol ],
        description: 'Loop Variable'
      }
    }
  },
  directives: {
    Drop
  }
}
</script>
