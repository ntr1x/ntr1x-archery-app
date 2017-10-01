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
    validation: Object,
    placeholder: String
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>
