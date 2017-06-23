<template>
  <section class="root" @click.self="$store.commit('modals/close')">
    <div class="modal">
      <proxy :component="overlay.provider()" :pass="overlay.data"></proxy>
    </div>
  </section>
</template>

<script>
import Proxy from './Proxy'

export default {
  props: {
    overlay: Object
  },
  components: {
    Proxy
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/partials/mixins";

.root {
  @include position(fixed);
  background-color: rgba(255, 0, 0, 0.3);
}

</style>
