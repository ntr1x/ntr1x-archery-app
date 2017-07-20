<template>
  <div class="root drop-area" :style="{
    top: top,
    left: left,
    width: width,
    height: height
  }">
    <div class="drop-position" v-for="position in positions" :style="{
      top: position.top,
      left: position.left,
      width: position.width,
      height: position.height
    }">
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
    children: Array
  },
  data () {
    const area = this.area

    return {
      top: `${area.top}px`,
      left: `${area.left}px`,
      width: `${area.right - area.left}px`,
      height: `${area.bottom - area.top}px`,
      positions: this.calcPositions()
    }
  },
  methods: {

    calcPositions () {
      switch (this.mode) {
        case 'row': return this.calcPositionsRow()
        case 'column': return this.calcPositionsColumn()
        default: return []
      }
    },

    calcPositionsRow () {
      const area = this.area
      const children = this.children
      const positions = []
      for (const curr of children) {
        positions.push({ type: 'left', top: `${area.top}px`, left: `${curr.left}px`, width: 0, height: `${area.bottom - area.top}px` })
        positions.push({ type: 'right', top: `${area.top}px`, left: `${curr.right - 1}px`, width: 0, height: `${area.bottom - area.top}px` })
      }
      return positions
    },

    calcPositionsColumn () {
      const area = this.area
      const children = this.children
      const positions = []
      for (const curr of children) {
        positions.push({ type: 'top', top: `${curr.top}px`, left: `${area.left}px`, width: `${area.right - area.left}px`, height: 0 })
        positions.push({ type: 'bottom', top: `${curr.bottom - 1}px`, left: `${area.left}px`, width: `${area.right - area.left}px`, height: 0 })
      }
      return positions
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
