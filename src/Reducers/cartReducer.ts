interface Actions {
  type: String
  payload: {}
}

export const cartReducer = (state = { cartItems: [] }, action: Actions) => {
  switch (action.type) {
    case 'CART_ADD':
      console.log('added to cart')
      return {
        ...state,
        cartItem: [...state.cartItems, action.payload],
      }
    default:
      return state
  }
}
