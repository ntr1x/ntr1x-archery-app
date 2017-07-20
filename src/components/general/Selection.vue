<template>
  <div class="root selection" :style="{
    top: top,
    left: left,
    width: width,
    height: height
    }">
    <div class="index" v-if="count > 1">{{index + 1}}</div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    count: Number,
    title: String,
    area: Object
  },
  data () {
    const area = this.area

    return {
      top: `${area.top}px`,
      left: `${area.left}px`,
      width: `${area.right - area.left}px`,
      height: `${area.bottom - area.top}px`
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/partials/mixins";

.root.selection {
  position: fixed;
  z-index: 2;
  pointer-events: none;
  box-sizing: border-box;
  border: 1px solid blue;
  outline: 1px solid blue;

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
</style>
