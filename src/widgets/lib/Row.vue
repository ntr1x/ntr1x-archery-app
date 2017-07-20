<template>
  <div class="root row" v-drop:row>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .root {
    display: flex;
    position: relative;
  }
</style>

<script>
import { AppearanceMixin, FlexMixin } from '@/widgets/mixins'
import { Drop } from '@/directives'

export default {
  name: 'row',
  title: 'Row',
  container: true,
  mixins: [AppearanceMixin, FlexMixin],
  directives: {
    Drop
  }
}
</script>
