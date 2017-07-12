<template>
  <div class="root column" v-drop>
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
  mixins: [AppearanceMixin, FlexMixin],
  directives: {
    Drop
  }
}
</script>
