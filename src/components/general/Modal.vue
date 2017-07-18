<template>
  <div class="root modal">
    <div class="content" @click.self="$store.commit('modals/close')">
      <proxy :component="modal.factory()" :pass="modal.data"></proxy>
    </div>
  </div>
</template>

<script>
import Proxy from './Proxy'

export default {
  props: {
    modal: Object
  },
  components: {
    Proxy
  }
}
</script>

<style scoped lang="scss" src="./Modal.scss"></style>
