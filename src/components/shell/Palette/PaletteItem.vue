<template>
  <div class="root palette-item" draggable="true" @dragstart="handleDragstart">
    <span class="highlight highlight-default">
      <i class="icon-item" :class="item.icon.class"
        :style="{ backgroundImage: item.icon.backgroundImage && `url(${item.icon.backgroundImage})` }"
      >{{item.icon.content}}</i>
      <span>{{item.title}}</span>
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    category: Object,
    item: Object
  },
  methods: {
    ...mapActions({
      transferPut: 'designer/transfer/put'
    }),
    handleDragstart (e) {
      this.transferPut(this.item)
      e.dataTransfer.setData('application/x-widget', `${this.category.name}.${this.item.name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/partials/mixins";

.root.palette-item {
  @include with-highlights();
  @include with-icons(icon-item, 22, 14);
  display: inline-block;
  background: transparent;

  >.highlight {
    color: $color-white;
    >.icon-item {
      >svg {
        fill: $color-white;
      }
    }
  }
}

</style>
