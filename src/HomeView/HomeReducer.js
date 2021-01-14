export const initialState = {
  view: 'all',
  plantList: [],
  favorites: []
}

export const homeReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, plantList: action.plantList }
    case 'TOGGLE_VIEW':
      const toggleResult = (state.view === 'all') ? 'favorites' : 'all'
      return { ...state, view: toggleResult }
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.plant] }
    case 'REMOVE_FROM_FAVORITES':
      const favPlants = state.favorites.filter(plant => plant.id !== action.id)
      return { ...state, favorites: favPlants }
    default:
      return state
  }
}