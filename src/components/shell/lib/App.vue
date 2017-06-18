<template>
  <div>
    <router-view></router-view>
    <modal-stack :stack="$store.state.modals.stack" />
  </div>
</template>

<style scoped lang="scss" src="./App.scss"></style>

<script>
export default {
  components: {
    ModalStack: require('@/components/general/lib/ModalStack')
  }
}
</script>
