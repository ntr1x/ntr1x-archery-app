<template>
  <section class="root selection-stack">
    <selection v-for="item in stack" :area="item.area" :bounds="item.bounds" :title="item.title" :index="item.index" :count="stack.length" :key="item.id" />
  </section>
</template>

<script>
import uniqid from 'uniqid'

export default {
  props: {
    widget: Object
  },
  data () {
    return {
      stack: null
    }
  },
  mounted () {
    this.$watch('widget', this.handleSelect, { immediate: true })
  },
  components: {
    Selection: require('./Selection')
  },
  methods: {
    handleSelect () {
      const elements = [...document.querySelectorAll(`[data-widget-id="${this.widget.id}"]`)]
      this.stack = elements.map((element, index) => {
        const rect = element.getBoundingClientRect()
        return {
          id: uniqid(),
          index,
          title: this.widget.title || this.widget.name,
          area: { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left },
          bounds: { top: 0, left: 0, right: 0, bottom: 0 }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .root.selection-stack {
    position: relative;
    overflow: visible;
    z-index: 100;
  }
</style>
