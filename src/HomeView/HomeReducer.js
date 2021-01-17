export const initialState = {
  view: 'all',
  pageNumber: 16,
  plantList: []
}

export const homeReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, plantList: action.plantList }
    case 'JUMP_TO_PAGE':
      return { ...state, pageNumber: action.pageNumber }
    case 'TOGGLE_VIEW':
      const toggleResult = (state.view === 'all') ? 'favorites' : 'all'
      return { ...state, view: toggleResult }
    default:
      return state
  }
}