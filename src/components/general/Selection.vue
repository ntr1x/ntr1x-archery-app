<template>
  <div class="root selection" :style="{
    clip: clip
  }">
    <div class="shadow" :style="{
      top: top,
      left: left,
      width: width,
      height: height
    }">
      <div class="actions" v-if="index === 0">
        <i class="material-icons icon-action">zoom_out_map</i>
        <i class="material-icons icon-action">arrow_upward</i>
        <i class="material-icons icon-action">content_copy</i>
        <i class="material-icons icon-action">delete</i>
      </div>
      <div class="index" v-if="count > 1">{{index + 1}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    count: Number,
    title: String,
    area: Object,
    bounds: Object
  },
  data () {
    const area = this.area
    const bounds = this.bounds

    return {
      top: `${area.top}px`,
      left: `${area.left}px`,
      width: `${area.right - area.left}px`,
      height: `${area.bottom - area.top}px`,
      clip: `rect(${bounds.top}px, ${bounds.right}px, ${bounds.bottom}px, ${bounds.left}px)`
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/partials/mixins";

.root.selection {

  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;

  >.shadow {
    position: fixed;
    z-index: 2;
    pointer-events: none;
    box-sizing: border-box;
    border: 2px solid blue;

    >.actions {

      @include with-icons(icon-action, 20px, 12px, 16px);

      pointer-events: auto;
      background: blue;
      display: block;
      position: absolute;
      top: -24px;
      left: -2px;
      color: #FFFFFF;
      white-space: nowrap;
      padding: 2px 5px;

      >.title {
        white-space: nowrap;
      }
    }

    >.index {
      position: absolute;
      top: 2px;
      left: 2px;
      padding: 2px;
      line-height: 11px;
      width: 11px;
      text-align: center;
      background: blue;
      color: #FFFFFF;
      font-size: 9px;
    }
  }
}
</style>
