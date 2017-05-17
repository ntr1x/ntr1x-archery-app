export default () => ({
  state: {
    panels: {
      top: {
        actions: true
      },
      bottom: {
        console: true
      },
      left: {
        palette: true,
        outline: true
      },
      right: {
        properties: true,
        structure: false
      }
    },
    page: {
      children: [
        {
          name: 'aw-canvas',
          props: {
            width: '300px',
            height: '400px'
          },
          children: [
            {
              name: 'aw-text',
              props: {
                width: '200px',
                height: 'auto'
              }
            },
            {
              name: 'aw-stack',
              props: {
                type: 'horizontal'
              },
              children: [
                {
                  name: 'aw-text',
                  props: {
                    width: '200px',
                    height: 'auto'
                  }
                },
                {
                  name: 'aw-text',
                  props: {
                    width: '200px',
                    height: 'auto'
                  }
                }
              ]
            },
            {
              name: 'aw-stack',
              props: {
                type: 'horizontal'
              },
              children: [
                {
                  name: 'aw-text',
                  props: {
                    width: '200px',
                    height: 'auto'
                  }
                },
                {
                  name: 'aw-text',
                  props: {
                    width: '200px',
                    height: 'auto'
                  }
                },
                {
                  name: 'aw-text',
                  props: {
                    width: '200px',
                    height: 'auto'
                  }
                }
              ]
            },
            {
              name: 'aw-text',
              props: {
                width: '200px',
                height: 'auto'
              }
            },
            {
              name: 'aw-text',
              props: {
                width: '200px',
                height: 'auto'
              }
            }
          ]
        }
      ]
    }
  },
  mutations: {
    'designer/panel/toggle': (state, { name, pane }) => {
      state.panels[name][pane] = !state.panels[name][pane]
    }
  }
})
