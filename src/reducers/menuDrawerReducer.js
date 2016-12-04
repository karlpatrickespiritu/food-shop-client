let initialState = {
  is_opened: false,
  options: [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Products', link: '/products' },
    { id: 3, title: 'About', link: '/about' },
  ]
}

const menuDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { ...state, is_opened: true }
    case 'CLOSE_MENU':
      return { ...state, is_opened: false }
    default: return state
  }
}

export default menuDrawerReducer