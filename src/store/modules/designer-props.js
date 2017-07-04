import uniqid from 'uniqid'

export const create = async ({ state, commit }, { name, title, type }) => {
  if (state.selected.page.props.find((prop) => prop.name === name)) {
    throw new Error('Cannot create prop: duplicate name')
  }
  commit('props/update', [
    ...state.selected.page.props, {
      id: uniqid(),
      name,
      title,
      type
    }
  ])
}

export const update = async ({ state, commit }, { id, name, title, type }) => {
  if (state.selected.page.props.find((prop) => prop.name === name && prop.id !== id)) {
    throw new Error('Cannot update prop: duplicate name')
  }
  commit('props/update', state.selected.page.props.map(page => page.id !== id ? page
    : {
      id: uniqid(),
      name,
      title,
      type
    }
  ))
}

export const remove = async ({ state, commit }, { id }) => {
  if (!state.selected.page.props.find((prop) => prop.id === id)) {
    throw new Error('Cannot remove prop: unknown prop ID')
  }
  commit('props/update', state.selected.page.props.filter(prop => prop.id !== id))
}
