// PRODUCTS INTERFACE
interface Product {
  id: number
  name: string
  price: number
  category: string
  desc: string
  image: string
}

// CART INTERFACES
interface Cart {
  id: number
}

interface CartState {
  cart: Cart[]
}

// CART ACTION INTERFACES
const ADD_CART = 'ADD_CART'
const REMOVE_CART = 'REMOVE_CART'

interface AddCartAction {
  type: ADD_CART
  payload: number
}

interface RemoveCartAction {
  type: REMOVE_CART
  payload: number
}

type CartActionTypes = AddCartAction | RemoveCartAction

//ROOT REDUCER TYPE
type RootState = ReturnType<typeof reducer>

//ROUTE PARAMS
interface RouteParams {
  id: string
  param2?: string
}
