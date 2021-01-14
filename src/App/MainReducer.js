export const initialState = {
  plantId: null
}

export const mainReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_PLANT':
      return { ...state, plantId: action.id }
    default:
      return state
  }
}