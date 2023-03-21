import React from 'react'
import { NavLink } from 'react-router-dom'

import './CartWidget.scss'

const CartWidget = () => {
    return (
        <NavLink to={'/cart'} className='cartWidget'>
            <div className='cartNumber'>0</div>
            <img className='cartLogo' src="./assets/cart.svg" alt="Cart Logo" />
        </NavLink>
    )
}

export default CartWidget