import React, { useContext, useEffect, useState } from 'react'

import './CartMenu.scss'

import CartContext from '../../../contexts/CartContext'

const CartMenu = () => {

    const { cartTotalAmount, clearCart, buyItems } = useContext(CartContext)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cartTotalAmount)
    }, [cartTotalAmount])

    return (
        <div className='cartMenu'>
            <h3 className='cartTotal'>Total: <span>{total} USD</span></h3>
            <div className='cartMenu-btns'>
                <div onClick={clearCart} className='clear-btn'>VACIAR</div>
                <div onClick={buyItems} className='buy-btn'>COMPRAR</div>
            </div>
        </div>
    )
}

export default CartMenu