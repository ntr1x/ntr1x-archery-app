<template>
  <div class="root canvas" v-drop>
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
import { mapActions } from 'vuex'

export default {
  name: 'canvas',
  title: 'Canvas',
  mixins: [AppearanceMixin, FlexMixin],
  directives: {
    Drop
  },
  created () {
    // console.log('build', this, this.$parent)
  },
  methods: {
    ...mapActions({
      transferRetrieve: 'designer/transfer/retrieve'
    })
  }
}
</script>
