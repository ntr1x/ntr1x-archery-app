<template>
  <div class="root dropdown">
    
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/partials/variables";
@import "~@/styles/partials/mixins";

input {
  @include input();
}
</style>
