<template>
  <div class="root" @dragenter="handleDragEnter" @dragover="handleDragOver" @drop="handleDrop">
    <slot></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    display: flex;
    flex-direction: column;
    position: relative;
  }
</style>

<script>
import { AppearanceMixin, FlexMixin } from '@/widgets/mixins'
import { mapActions } from 'vuex'

export default {
  name: 'canvas',
  title: 'Canvas',
  mixins: [AppearanceMixin, FlexMixin],
  methods: {
    ...mapActions({
      transferRetrieve: 'designer/transfer/retrieve'
    }),
    handleDragEnter (e) {
      console.log('DragEnter', e.dataTransfer.getData('application/x-widget'))
      // let items = e.dataTransfer.items
      // for (let item of items) {
      //   if (item.type === 'application/x-widget') {
      //     console.log('Yep!', e.dataTransfer.getData('application/x-widget'))
      //     e.preventDefault()
      //     return
      //   }
      // }
    },
    handleDragOver (e) {
      e.preventDefault()
      console.log('DragOver', e.dataTransfer.getData('application/x-widget'))
    },
    async handleDrop (e) {
      e.preventDefault()
      const data = await this.transferRetrieve()
      console.log('Drop', data)
    }
  }
}
</script>
