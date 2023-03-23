import React, { useContext } from 'react'

import './CartContainer.scss'

import CartContext from '../Context/CartContext'

const CartContainer = () => {

    const { cartItems } = useContext(CartContext)

    return (
        <ul className='cartContainer'>
            {
                cartItems.map(item => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <h3>{item.quantity}</h3>
                    </li>
                ))
            }
        </ul>
    )
}

export default CartContainer