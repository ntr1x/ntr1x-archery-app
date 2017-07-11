import { mapMutations, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { Focus } from '@/directives'
import * as controls from '@/components/controls'

export default {
  props: {
    page: Object
  },
  data () {
    return {
      title: this.page && this.page.title,
      route: this.page && this.page.route,
      error: null
    }
  },
  components: {
    ...controls
  },
  validations: {
    title: {
      required
    },
    route: {
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
        await this.createPage({
          title: this.title,
          route: this.route
        })
        this.close()
      } catch (e) {
        this.error = e.message
      }
    },
    async update () {
      try {
        await this.updatePage({
          id: this.page.id,
          title: this.title,
          route: this.route
        })
        this.close()
      } catch (e) {
        this.error = e.message
      }
    },
    async remove () {
      try {
        await this.removePage(this.page)
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
