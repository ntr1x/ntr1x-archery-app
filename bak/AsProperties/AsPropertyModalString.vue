<template>
  <section class="modal-dialog">
    <form class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" @click.self="$store.commit('modals/close')">&times;</button>
        <h4 class="modal-title">{{ descriptor.title }}</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label>Value</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Value</label>
          <textarea class="form-control"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" @click.self="$store.commit('modals/close')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  name: 'as-property-modal-string',
  props: {
    descriptor: Object,
    property: Object,
    widget: Object,
    model: Object,
    context: Object
  },
  created () {
    console.log(this)
  },
  methods: {
    update (property) {
      this.$store.commit('designer/widgets/property', {
        widget: this.widget,
        model: this.model,
        name: this.descriptor.name,
        property: Object.assign({}, this.property, property)
      })
    }
  }
}
</script>
<style scoped lang="scss" src="./AsPropertyModal.scss"></style>
