import { combineReducers } from 'redux'
import menu from './menuDrawerReducer'
import products from './productsReducer'

export default combineReducers({ menu, products })