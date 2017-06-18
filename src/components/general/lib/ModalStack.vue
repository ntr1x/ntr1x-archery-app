<template>
  <section class="modal-stack">
    <modal v-for="modal in stack" :modal="modal" :key="modal"></modal>
  </section>
</template>

<script>
export default {
  props: {
    stack: Array
  },
  events: {
    close: Function
  },
  components: {
    Modal: require('./Modal')
  }
}
</script>

<style scoped lang="scss" src="./Modal.scss"></style>
