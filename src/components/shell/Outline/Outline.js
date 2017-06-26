import OutlineItem from './OutlineItem.vue'

export default {
  data () {
    return {
      children: [
        {
          title: 'One',
          children: [
            {
              title: 'One',
              children: [
                {
                  title: 'One'
                },
                {
                  title: 'Two'
                }
              ]
            },
            {
              title: 'Two',
              children: [
                {
                  title: 'One'
                },
                {
                  title: 'Two'
                }
              ]
            }
          ]
        },
        {
          title: 'One',
          children: [
            {
              title: 'One',
              children: [
                {
                  title: 'One'
                },
                {
                  title: 'Two'
                }
              ]
            },
            {
              title: 'Two',
              children: [
                {
                  title: 'One'
                },
                {
                  title: 'Two'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    OutlineItem
  }
}
