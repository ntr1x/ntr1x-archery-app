import uniqid from 'uniqid'

export const create = async ({ state, commit }, { route, title }) => {
  if (state.portal.pages.find((page) => page.route === route)) {
    throw new Error('Cannot create page: duplicate route')
  }
  commit('pages/update', [
    ...state.portal.pages, {
      id: uniqid(),
      route,
      title
    }
  ])
}

export const update = async ({ state, commit }, { id, route, title }) => {
  if (state.portal.pages.find((page) => page.route === route && page.id !== id)) {
    throw new Error('Cannot update page: duplicate route')
  }
  commit('pages/update', state.portal.pages.map(page => page.id !== id ? page
    : {
      id: uniqid(),
      route,
      title
    }
  ))
}

export const remove = async ({ state, commit }, { id }) => {
  if (!state.portal.pages.find((page) => page.id === id)) {
    throw new Error('Cannot remove page: unknown page ID')
  }
  commit('pages/update', state.portal.pages.filter(page => page.id !== id))
}
