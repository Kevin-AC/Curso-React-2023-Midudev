/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
export function Products ({ products }) {
  const { addToCart, cart, removeFronCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(iten => iten.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {
          const isPrdouctInCart = checkProductInCart(product)
          const handleUpdateCart = () => {
            isPrdouctInCart ? removeFronCart(product) : addToCart(product)
          }
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>-${product.price}

              </div>
              <div>
                <button className={isPrdouctInCart ? 'bg-red-700' : 'bg-cyan-500'}
                onClick={handleUpdateCart}>
                  {
                    isPrdouctInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                  }

                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
