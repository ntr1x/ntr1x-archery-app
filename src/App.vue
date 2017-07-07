<template>
  <div class="root app">
    <router-view></router-view>
    <modal-stack :stack="$store.state.modals.stack" />
  </div>
</template>

<style scoped lang="scss" src="./App.scss"></style>

<script>
export default {
  components: {
    ModalStack: require('@/components/general/ModalStack')
  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/partials/mixins';

.root.app {
  @include position(absolute, 0, 0, 0, 0);
}
</style>
