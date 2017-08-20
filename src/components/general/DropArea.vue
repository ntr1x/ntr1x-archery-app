<template>
  <div class="root drop-area" :style="{
    top: top + 'px',
    left: left + 'px',
    width: width + 'px',
    height: height + 'px'
  }">
    <div
      class="drop-position"
      v-for="position in positions"
      v-if="position.primary"
      :style="{
        top: position.top + 'px',
        left: position.left + 'px',
        width: position.width + 'px',
        height: position.height + 'px'
      }"
    >
      <div :class="{
        'drop-arrow-top': position.type === 'top',
        'drop-arrow-right': position.type === 'right',
        'drop-arrow-bottom': position.type === 'bottom',
        'drop-arrow-left': position.type === 'left'
      }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: String,
    area: Object,
    positions: Array
  },
  data () {
    const area = this.area
    return {
      top: area.top,
      left: area.left,
      width: area.right - area.left,
      height: area.bottom - area.top
    }
  }
}
</script>

<style scoped lang="scss">
.root.drop-area {

  position: fixed;
  z-index: 2;
  pointer-events: none;
  box-sizing: border-box;

  >.drop-position {
    position: fixed;
    z-index: 3;
    pointer-events: none;
    border: 1px solid red;
    box-sizing: border-box;

    >.drop-arrow-top {
      position: absolute;
      box-sizing: border-box;
      left: 50%;
      bottom: 3px;
      margin-left: -5px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 5px 5px;
      border-color: transparent transparent red transparent;
    }

    >.drop-arrow-right {
      position: absolute;
      box-sizing: border-box;
      top: 50%;
      left: 3px;
      margin-top: -5px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px 0 5px 5px;
      border-color: transparent transparent transparent red;
    }

    >.drop-arrow-bottom {
      position: absolute;
      box-sizing: border-box;
      left: 50%;
      top: 3px;
      margin-left: -5px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px 5px 0 5px;
      border-color: red transparent transparent transparent;
    }

    >.drop-arrow-left {
      position: absolute;
      box-sizing: border-box;
      top: 50%;
      right: 3px;
      margin-top: -5px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px 5px 5px 0;
      border-color: transparent red transparent transparent;
    }
  }
}
</style>
