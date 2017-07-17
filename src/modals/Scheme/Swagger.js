import { mapMutations } from 'vuex'
import { Focus } from '@/directives'
import * as controls from '@/components/controls'
import { debounce } from 'lodash'

export default {
  props: {
    spec: Object
  },
  data () {
    return {
      filterTag: null, // null - all, '' - other
      filterString: '',
      filteredItems: null,
      error: null
    }
  },
  created () {
    console.log(this.spec)

    const items = []
    for (const [path, definition] of Object.entries(this.spec.paths)) {
      for (const [method, operation] of Object.entries(definition)) {
        items.push({
          selected: false,
          path,
          definition,
          method: method.toUpperCase(),
          operation
        })
      }
    }
    this.items = items

    this.filter()
    this.filterDebounced = debounce(this.filter, 300)
  },
  components: {
    ...controls
  },
  directives: {
    Focus
  },
  methods: {
    ...mapMutations({
      close: 'modals/close'
    }),
    handleFilterTag (tag) {
      this.filterTag = tag
      this.filter()
    },
    handleFilterString (string) {
      this.filterString = string
      this.filterDebounced()
    },
    handleToggleSelected (item) {
      item.selected = !item.selected
    },
    filter () {
      const items = []
      try {
        for (const item of this.items) {
          const { path, method, operation } = item

          if (this.filterTag !== null) {
            let accept = false
            if (!operation.tags) {
              if (this.filterTag === '') {
                accept = true
              }
            } else {
              for (const tag of operation.tags) {
                if (tag === this.filterTag) {
                  accept = true
                  break
                }
              }
            }
            if (!accept) {
              continue
            }
          }

          if (this.filterString !== '') {
            let accept = false
            const parts = this.filterString.split(/\s+/g)
            for (const part of parts) {
              if (path.toLowerCase().indexOf(part.toLowerCase()) >= 0) {
                accept = true
                break
              }
              if (method.toLowerCase().indexOf(part.toLowerCase()) >= 0) {
                accept = true
                break
              }
              if (operation.summary != null && operation.summary.toLowerCase().indexOf(part.toLowerCase()) >= 0) {
                accept = true
                break
              }
            }
            if (!accept) {
              continue
            }
          }

          items.push(item)
        }
      } catch (e) {
        console.log(e)
        // ignore
      }
      this.filteredItems = items
    },
    async submit () {
      try {
        this.close()
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
