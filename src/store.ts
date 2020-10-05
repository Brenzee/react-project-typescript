import { createStore, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './Reducers/cartReducer'

const reducer = combineReducers({
  cart: cartReducer,
})

const initialState = {}

export const store = createStore(reducer, initialState, composeWithDevTools())
