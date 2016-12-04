const initialState = [{
  id: 1,
  name: 'Burger Yum',
  categories: ['burger', 'fast food', 'snack'],
  images: ['images/img1.jpg'],
  price: 40.00,
  description: 'A very yummy buger you dont want to miss!',
  seller: {
    id: 1,
    name: 'Jollibee',
    address: 'F. Ramos St., Cebu City',
    avatar: 'images/avatar.jpg'
  }
}, {
  id: 2,
  name: 'Spaghetti',
  categories: ['pasta', 'faste food'],
  images: ['images/img1.jpg'],
  price: 60.00,
  description: 'Spaghetti! Spaghetti! Spaghetti!',
  seller: {
    id: 1,
    name: 'Jollibee',
    address: 'F. Ramos St., Cebu City',
    avatar: 'images/avatar.jpg'
  }
}]


const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_PRODUCTS':
      return state
    default: return state
  }
}

export default productsReducer