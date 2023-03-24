import React from 'react'

import './CartItemsList.scss'

import CartItem from './CartItem/CartItem'

const CartItemsList = ({ cartItems }) => {
    return (
        <ul className='cartItemsList'>
            {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
        </ul>
    )
}

export default CartItemsList