<template>
  <div class="root drop-area" :style="{
    top: area.top,
    left: area.left,
    width: area.width,
    height: area.height
  }">
    <pre>{{area}}</pre>
  </div>
</template>

<script>
export default {
  props: {
    area: Object,
    clip: Object
  }
}
</script>

<style scoped lang="scss">
.root.drop-area {
  position: fixed;
  z-index: 1;
  pointer-events: none;
  background: rgba(100,100,100,0.5);
  // clip: rect(0,1000px,800px,0);
  // border: 1px solid yellow;
}
</style>
