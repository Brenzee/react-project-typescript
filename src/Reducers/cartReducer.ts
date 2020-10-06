import { ADD_CART, REMOVE_CART } from '../constants'
const initialState: CartState = {
  cart: [],
}

export const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case REMOVE_CART: {
      console.log('remove')
      const index = state.cart.findIndex((item) => item.id === action.payload)
      console.log(index)
      const newCart = state.cart.filter((_, i) => i !== index)
      return {
        ...state,
        cart: [...newCart],
      }
    }

    default:
      return state
  }
}
