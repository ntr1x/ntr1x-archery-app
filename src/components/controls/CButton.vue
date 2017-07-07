<template>
  <button @click="handleClick"><slot></slot></button>
</template>

<script>
export default {
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/partials/variables";
@import "~@/styles/partials/mixins";

button {
  @include button();
}
</style>
