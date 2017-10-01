import { mapMutations } from 'vuex'
import { required, url } from 'vuelidate/lib/validators'
import { Focus } from 'src/directives'
import * as controls from 'src/components/controls'

export default {
  props: {
    endpoint: Object
  },
  data () {
    return {
      name: this.endpoint && this.endpoint.name,
      type: this.endpoint && this.endpoint.type || 'get',
      url: null,
      path: null,
      error: null
    }
  },
  computed: {
    types: () => ([
      'OPTIONS',
      'HEAD',
      'GET',
      'POST',
      'PUT',
      'PATCH',
      'DELETE'
    ])
  },
  components: {
    ...controls
  },
  validations: {
    name: {
      required
    },
    type: {
      required
    },
    url: {
      required,
      url
    },
    path: {
      required
    }
  },
  methods: {
    ...mapMutations({
      close: 'modals/close',
      modal: 'modals/open'
    }),
    // ...mapActions({
    //   createPage: 'designer/pages/create',
    //   updatePage: 'designer/pages/update',
    //   removePage: 'designer/pages/remove'
    // }),
    handleTypeChange (type) {
      this.type = type
    },
    async create () {
      try {
        // await this.createEndpoint({
        //   name: this.name,
        //   title: this.title,
        //   type: this.type
        // })
        this.close()
      } catch (e) {
        this.error = e.message
      }
    },
    async update () {
      try {
        // await this.updateEndpoint({
        //   id: this.page.id,
        //   name: this.name,
        //   title: this.title,
        //   type: this.type
        // })
        this.close()
      } catch (e) {
        this.error = e.message
      }
    },
    async remove () {
      try {
        // await this.removeProp(this.prop)
        this.close()
      } catch (e) {
        this.error = e.message
      }
    },
    async submit () {
      return this.endpoint
        ? await this.update()
        : await this.create()
    }
  },
  directives: {
    Focus
  }
}
