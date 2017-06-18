<template>
  <div class="property">
    <label class="property-title">
      {{ descriptor.title != null ? descriptor.title : descriptor.name }}
    </label>
    <div class="property-mode" :class="{
      'mode-eval': property.strategy == 'expression'
    }" @click="update({ strategy: property.strategy == 'expression' ? 'value' : 'expression' })">●</div>
    <div class="property-value">
      <span class="value-group">
        <span class="group-input">
          <input v-if="property.strategy == 'expression'"
            type="text" class="control"
            :value="property.expression"
            @input="event => update({ expression: event.target.value })"
          />
          <input v-else
            type="text" class="control"
            :value="property.value"
            @input="event => update({ value: event.target.value })"
          />
        </span>
        <span class="group-edit" @click="showModal()">...</span>
      </span>
    </div>
  </div>
</template>
<script>
import AsPropertyModalString from './AsPropertyModalString.vue'

export default {
  name: 'as-property-string',
  props: {
    descriptor: Object,
    property: Object,
    widget: Object,
    model: Object,
    context: Object
  },
  methods: {
    update (property) {
      this.$store.commit('designer/widgets/property', {
        widget: this.widget,
        model: this.model,
        name: this.descriptor.name,
        property: Object.assign({}, this.property, property)
      })
    },
    showModal () {
      this.$store.commit('modals/open', {
        provider: () => AsPropertyModalString,
        data: {
          descriptor: this.descriptor,
          property: this.propety,
          widget: this.widget,
          model: this.model,
          context: this.context
        }
      })
    }
  }
}
</script>
<style scoped lang="scss" src="./AsProperties.scss"></style>
