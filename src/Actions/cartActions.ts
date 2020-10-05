interface CartActions {
  type: 'CART_ADD'
  payload: {
    product: Number
    name: String
    image: String
    price: Number
  }
}

export const addToCart = (product: any) => (
  dispatch: (cartAction: CartActions) => void
) => {
  dispatch({
    type: 'CART_ADD',
    payload: {
      product: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    },
  })
}
