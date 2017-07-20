<template>
  <div class="root selection-actions" :style="{
    top: top,
    left: left
  }">
    <div class="actions">
      <i class="material-icons icon-action">zoom_out_map</i>
      <i class="material-icons icon-action">arrow_upward</i>
      <i class="material-icons icon-action">content_copy</i>
      <i class="material-icons icon-action">delete</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    area: Object
  },
  data () {
    const area = this.area
    return {
      top: `${area.top}px`,
      left: `${area.left}px`
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/partials/mixins";

.root.selection-actions {
  position: fixed;
  z-index: 2;
  pointer-events: none;
  box-sizing: border-box;

  @include with-icons(icon-action, 18px, 12px, 16px);

  >.actions {
    pointer-events: auto;
    background: blue;
    color: #FFFFFF;
    white-space: nowrap;
    padding: 0px 2px;
    margin-top: -20px;
    margin-left: -1px;
  }
}
</style>
