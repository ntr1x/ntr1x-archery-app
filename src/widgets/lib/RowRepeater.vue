<template>
  <div class="root row-repeater" v-drop:row.first>
    <slot v-for="item in items" :row="item" />
  </div>
</template>

<style type="scss" scoped>
  .root {
    display: flex;
    position: relative;
    width: auto;
    flex-wrap: wrap;
  }
</style>

<script>
import { AppearanceMixin, FlexMixin } from 'src/widgets/mixins'
import { Drop } from 'src/directives'

export default {
  name: 'row-repeater',
  title: 'Row Repeater',
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
      row: {
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
