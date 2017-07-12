<template>
  <div class="root app">
    <router-view></router-view>
    <drop-area-stack :stack="$store.state.dropAreas.stack" />
    <modal-stack :stack="$store.state.modals.stack" />
  </div>
</template>

<style scoped lang="scss" src="./App.scss"></style>

<script>
export default {
  components: {
    DropAreaStack: require('@/components/general/DropAreaStack'),
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
