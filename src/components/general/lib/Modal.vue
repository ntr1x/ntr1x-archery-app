<template>
  <section class="backdrop" @click.self="$store.commit('modals/close')">
    <div class="modal">
      <proxy :component="modal.provider()" :model="modal.data"></proxy>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    modal: Object
  },
  components: {
    Proxy: require('./Proxy')
  }
}
</script>

<style scoped lang="scss" src="./Modal.scss"></style>
