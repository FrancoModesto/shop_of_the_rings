import React, { useContext } from 'react'

import './CartContainer.scss'

import CartContext from '../../contexts/CartContext'
import CartItemsList from './CartItemsList/CartItemsList'
import CartMenu from './CartMenu/CartMenu'

const CartContainer = () => {

    const { cartItems } = useContext(CartContext)

    return (
        <div className='cartContainer'>
            <h1>Carrito</h1>
            {
                cartItems.length > 0 ?
                    <CartItemsList cartItems={cartItems} />
                    :
                    <h2 className='empty-cart-text'>AÚN NO HAY NADA EN EL CARRITO</h2>
            }
            <CartMenu cartItems={cartItems} />
        </div>
    )
}

export default CartContainer