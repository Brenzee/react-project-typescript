import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './Reducers/cartReducer'

const reducer = combineReducers({
  system: cartReducer,
})

const initialState: RootState = {}

export const store = createStore(reducer, initialState, composeWithDevTools())
