export const initialState = {
  view: 'all',
  pageNumber: 1,
  plantList: [],
  links: []
}

export const homeReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, plantList: action.plantList }
    case 'FETCH_LINKS':
      return { ...state, links: action.links }
    case 'JUMP_TO_PAGE':
      return { ...state, pageNumber: action.pageNumber }
    case 'TOGGLE_VIEW':
      const toggleResult = (state.view === 'all') ? 'favorites' : 'all'
      return { ...state, view: toggleResult }
    default:
      return state
  }
}