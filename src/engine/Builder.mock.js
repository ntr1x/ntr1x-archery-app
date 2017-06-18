// eslint no-template-curly-in-string: 0

export const source1 = () => ({
  pages: [
    {
      path: '',
      root: {
        component: 'std-canvas',
        container: {
          component: 'std-box',
          propsData: {
            background: '"blue"',
            flex: '"1 1 auto"'
          }
        },
        propsData: {
          width: '"" + 1024 + "px"',
          height: '"auto"',
          background: '"red"'
        },
        eventsData: {
          click: 'console.log'
        }
      }
    }
  ]
})

export const target1 = () => ({
  pages: [
    {
      path: '',
      root: {
        component: 'std-canvas',
        container: {
          component: 'std-box',
          propsData: {
            background: 'blue',
            flex: '1 1 auto'
          }
        },
        propsData: {
          width: '1024px',
          height: 'auto',
          background: 'red'
        },
        eventsData: {
          click: console.log
        }
      }
    }
  ]
})

export const source2 = () => ({
  pages: [
    {
      path: '',
      root: {
        component: 'std-canvas',
        container: {
          component: 'std-box',
          propsData: {
            background: '"blue"',
            flex: '"1 1 auto"'
          }
        },
        propsData: {
          width: '"" + 1024 + "px"',
          height: '"auto"',
          background: '"red"'
        },
        eventsData: {
          click: 'console.log'
        },
        children: [
          {
            component: 'std-stack-horisontal',
            container: {
              component: 'std-box',
              propsData: {
                flex: '"1 1 auto"'
              }
            }
          }
        ]
      }
    }
  ]
})

export const target2 = () => ({
  pages: [
    {
      path: '',
      root: {
        component: 'std-canvas',
        container: {
          component: 'std-box',
          propsData: {
            background: 'blue',
            flex: '1 1 auto'
          }
        },
        propsData: {
          width: '1024px',
          height: 'auto',
          background: 'red'
        },
        eventsData: {
          click: console.log
        },
        children: [
          {
            component: 'std-stack-horisontal',
            container: {
              component: 'std-box',
              propsData: {
                flex: '1 1 auto'
              }
            }
          }
        ]
      }
    }
  ]
})
