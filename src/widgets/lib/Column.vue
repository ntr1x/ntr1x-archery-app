<template>
  <div class="root column" v-drop:column>
    <slot></slot>
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
  name: 'column',
  title: 'Column',
  container: true,
  mixins: [AppearanceMixin, FlexMixin],
  directives: {
    Drop
  }
}
</script>
