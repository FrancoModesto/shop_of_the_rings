import React from 'react'

import './CartWidget.scss'

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <div className='cartNumber'>0</div>
            <img className='cartLogo' src="./assets/cart.svg" alt="Cart Logo" />
        </div>
    )
}

export default CartWidget