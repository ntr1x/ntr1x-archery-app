<template>
  <input type="text" class="input input-default"
    ref="input"
    :value="value"
    @input="updateValue($event.target.value)"
  />
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
