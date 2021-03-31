export const initialState = {
  view: 'all',
  plantList: [],
  links: []
}

export const homeReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, plantList: action.plantList }
    case 'FETCH_LINKS':
      return { ...state, links: action.links }
    case 'TOGGLE_VIEW':
      const toggleResult = (state.view === 'all') ? 'favorites' : 'all'
      return { ...state, view: toggleResult }
    default:
      return state
  }
}