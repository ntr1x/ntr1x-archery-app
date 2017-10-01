import { mapMutations } from 'vuex'
import { required, url } from 'vuelidate/lib/validators'
import axios from 'axios'
import { Focus } from 'src/directives'
import * as controls from 'src/components/controls'
import Swagger from './Swagger.vue'

export default {
  data () {
    return {
      url: null,
      error: null
    }
  },
  components: {
    ...controls
  },
  validations: {
    url: {
      required,
      url
    }
  },
  methods: {
    ...mapMutations({
      close: 'modals/close',
      modal: 'modals/open'
    }),
    async submit () {
      try {
        const response = await axios.get(this.url)
        if (!response.data || !response.data.paths || !response.data.info) {
          throw new Error('Not a valid swagger schema')
        }
        this.close()
        this.modal({
          factory: () => Swagger,
          data: {
            spec: response.data
          }
        })
      } catch (e) {
        this.error = e.message
      }
    }
  },
  directives: {
    Focus
  }
}
