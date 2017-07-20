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
      positions.push({ top: `${area.top}px`, left: `${area.left}px`, width: 0, height: `${area.bottom - area.top}px` })
      for (let i = 1; i < children.length; i++) {
        const prev = children[i - 1]
        const curr = children[i]
        positions.push({ top: `${area.top}px`, left: `${(curr.left + prev.right) / 2}px`, width: 0, height: `${area.bottom - area.top}px` })
      }
      positions.push({ top: `${area.top}px`, left: `${area.right}px`, width: 0, height: `${area.bottom - area.top}px` })
      return positions
    },

    calcPositionsColumn () {
      const area = this.area
      const children = this.children
      const positions = []
      positions.push({ top: `${area.top}px`, left: `${area.left}px`, width: `${area.right - area.left}px`, height: 0 })
      for (let i = 1; i < children.length; i++) {
        const prev = children[i - 1]
        const curr = children[i]
        positions.push({ top: `${(curr.top + prev.bottom) / 2}px`, left: `${area.left}px`, width: `${area.right - area.left}px`, height: 0 })
      }
      positions.push({ top: `${area.bottom}px`, left: `${area.left}px`, width: `${area.right - area.left}px`, height: 0 })
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

  >.drop-position {
    position: fixed;
    z-index: 3;
    pointer-events: none;
    outline: 1px solid red;
  }
}
</style>
