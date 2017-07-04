import { mapMutations, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import Focus from '@/directives/Focus'

export default {
  props: {
    prop: Object
  },
  data () {
    return {
      name: this.prop && this.prop.name,
      title: this.prop && this.prop.title,
      type: this.prop && this.prop.type,
      error: null
    }
  },
  validations: {
    name: {
      required
    },
    type: {
      required,
      pattern: async (value) => value && value.indexOf('/') === 0
    }
  },
  methods: {
    ...mapMutations({
      close: 'modals/close',
      modal: 'modals/open'
    }),
    ...mapActions({
      createPage: 'designer/pages/create',
      updatePage: 'designer/pages/update',
      removePage: 'designer/pages/remove'
    }),
    async create () {
      try {
        await this.createProp({
          name: this.name,
          title: this.title,
          type: this.type
        })
        this.close()
      } catch (e) {
        this.error = e.message
      }
    },
    async update () {
      try {
        await this.updateProp({
          id: this.page.id,
          name: this.name,
          title: this.title,
          type: this.type
        })
        this.close()
      } catch (e) {
        this.error = e.message
      }
    },
    async remove () {
      try {
        await this.removeProp(this.prop)
        this.close()
      } catch (e) {
        this.error = e.message
      }
    },
    async submit () {
      return this.page
        ? await this.update()
        : await this.create()
    },
    edit () {
      this.modal({
        factory: () => require('@/modals/Expression/Expression.vue')
      })
    }
  },
  directives: {
    Focus
  }
}
