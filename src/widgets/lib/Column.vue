<template>
  <div class="root column" v-drop:column>
    <slot></slot>
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
  name: 'column',
  title: 'Column',
  container: true,
  mixins: [AppearanceMixin, FlexMixin],
  directives: {
    Drop
  }
}
</script>
