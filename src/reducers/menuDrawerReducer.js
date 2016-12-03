let initialState = {
  is_opened: false
}

function menuDrawerReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MENU':
      return { ...state, is_opened: true }
    case 'CLOSE_MENU':
      return { ...state, is_opened: false }
    default: return state
  }
}

export default menuDrawerReducer