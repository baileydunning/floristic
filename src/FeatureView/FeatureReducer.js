export const initialState = {
  plantData: null
}

export const featureReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, plantData: action.plantData }
    default:
      return state
  }
}