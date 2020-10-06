import { ADD_CART, REMOVE_CART } from '../constants'

export const AddToCart = (item: Product) => {
  return {
    type: ADD_CART,
    payload: item,
  }
}

export const RemoveFromCart = (id: number) => {
  return {
    type: REMOVE_CART,
    payload: id,
  }
}
