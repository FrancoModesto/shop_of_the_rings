import React, { useContext } from 'react'

import './CartContainer.scss'

import CartContext from '../../contexts/CartContext'
import CartItemsList from './CartItemsList/CartItemsList'
import CartMenu from './CartMenu/CartMenu'

const CartContainer = () => {

    const { cartItems } = useContext(CartContext)

    return (
        <div className='cartContainer'>
            <h2>Carrito</h2>
            {
                cartItems.length > 0 ?
                    <CartItemsList cartItems={cartItems} />
                    :
                    <h3 className='empty-cart-text'>AÚN NO HAY NADA EN EL CARRITO</h3>
            }
            <CartMenu />
        </div>
    )
}

export default CartContainer