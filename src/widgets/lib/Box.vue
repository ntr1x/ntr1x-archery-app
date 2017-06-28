<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<style type="scss" scoped>
  .root {
    flex: 1 1 auto;
  }
</style>

<script>
export default {
  name: 'box',
  title: 'Box',
  props: {
    margin: String,
    padding: String,
    flex: String,
  }
}
</script>

<icon test="blabla" a-foo="bbb" src="material-design-icons/social/svg/production/ic_cake_24px.svg"></icon>
