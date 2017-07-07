<template>
  <button type="button" @click="handleClick"><slot></slot></button>
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
