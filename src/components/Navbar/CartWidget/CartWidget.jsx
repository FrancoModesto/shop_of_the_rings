import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import './CartWidget.scss'

import CartContext from '../../../contexts/CartContext'

const CartWidget = () => {

    const { cartLength } = useContext(CartContext)
    const [cartNumber, setCartNumber] = useState(0)

    useEffect(() => {
        setCartNumber(cartLength)
    }, [cartLength])

    return (
        <NavLink to={'/cart'} className='cartWidget'>
            <div className='cartNumber'>{cartNumber}</div>
            <img className='cartLogo' src="./assets/cart.svg" alt="Cart Logo" />
        </NavLink>
    )
}

export default CartWidget