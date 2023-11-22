/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducer/cart'
export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  // const [cart, setCart] = useState([])

  // const addToCart = product => {
  //   const productInCartIndex = cart.findIndex(iten => iten.id === product.id)
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   setCart(prevState => ([
  //     ...prevState, { ...product, quantity: 1 }
  //   ]))
  // }

  // const removeFronCart = product => {
  //   setCart(prevState => prevState.filter(iten => iten.id !== product.id))
  // }
  // const clearCart = () => {
  //   setCart([])
  // }
  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeFronCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  return (
    <CartContext.Provider value={
        {
          cart: state,
          addToCart,
          removeFronCart,
          clearCart
        }
    }
    >
        {children}
    </CartContext.Provider>
  )
}
