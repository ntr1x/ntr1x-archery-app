<template>
  <section class="category">
    <div class="head uppercase-title" @click="toggle()">
      <span class="head-title">{{ category.name === '' ? 'CUSTOM' : category.name }}</span>
      <span class="head-caret">
        <span class="glyphicon" :class="{
          'glyphicon-triangle-bottom': open,
          'glyphicon-triangle-right': !open
        }"></span>
      </span>
    </div>
    <div class="body" v-if="open">
      <div class="properties-table">
        <template v-for="item in items">
          <as-property-string :key="item.descriptor" v-if="item.descriptor.type == String"
            :descriptor="item.descriptor" :property="item.property" :widget="widget" :model="model" />
          <as-property-string :key="item.descriptor" v-if="item.descriptor.type == Number"
            :descriptor="item.descriptor" :property="item.property" :widget="widget" :model="model" />
          <as-property-string :key="item.descriptor" v-if="item.descriptor.type == Boolean"
            :descriptor="item.descriptor" :property="item.property" :widget="widget" :model="model" />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import AsPropertyString from './AsPropertyString.vue'

export default {
  name: 'as-properties-category',
  props: {
    widget: Object,
    model: Object,
    category: Object
  },
  data () {
    return {
      open: true,
      items: this.category.props.map(prop => ({
        descriptor: prop,
        property: this.model.props[prop.name]
      }))
    }
  },
  components: {
    AsPropertyString
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style scoped lang="scss" src="./AsProperties.scss"></style>
