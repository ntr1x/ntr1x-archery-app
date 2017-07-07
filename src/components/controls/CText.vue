<template>
  <input type="text"
    ref="input"
    :value="value"
    :placeholder="placeholder"
    @input="handleInput($event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String
  },
  methods: {
    handleInput (value) {
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
