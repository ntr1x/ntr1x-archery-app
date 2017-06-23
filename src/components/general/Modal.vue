<template>
  <section class="root" @click.self="$store.commit('modals/close')">
    <div class="modal">
      <proxy :component="modal.provider()" :pass="modal.data"></proxy>
    </div>
  </section>
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

<style scoped lang="scss">
@import "~@/styles/partials/mixins";

.root {
  @include position(fixed);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    position: relative;
    flex: 0 0 auto;
    display: block;
    max-height: 90%;
    max-width: 90%;

    >* {
      display: table;
    }
  }
}

</style>
