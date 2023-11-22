/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
export const CartContext = createContext()




export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInCartIndex = cart.findIndex(iten => iten.id === product.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState, { ...product, quantity: 1 }
    ]))
  }
  const removeFronCart = product => {
    setCart(prevState => prevState.filter(iten => iten.id !== product.id))
  }
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={
        {
          cart,
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
