<template>
  <ul
    class="dropdown dropdown-default"
    :class="{
      'dropdown-open': open
    }"
  >
    <li v-for="option in options" :class="{ active : option.value === value }">
      <a href="#" @click.stop.prevent="handleSelect(option)">{{ option.label }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    value: String,
    options: Array
  },
  data () {
    return {
      open: null
    }
  },
  methods: {
    handleDocumentClick () {
      this.toggle(false)
    },
    handleSelect (option) {
      this.toggle(false)
      this.$emit('input', option.value)
    },
    toggle (value) {
      this.open = value
      if (global.document) {
        if (value) {
          global.document.addEventListener('click', this.handleDocumentClick)
        } else {
          global.document.removeEventListener('click', this.handleDocumentClick)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/partials/variables";
@import "~@/styles/partials/mixins";

ul {
  @include dropdown();
  display: none;
  &.dropdown-open {
    display: block;
  }
}
</style>
