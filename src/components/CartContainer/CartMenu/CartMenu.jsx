import React, { useContext, useEffect, useState } from 'react'

import './CartMenu.scss'

import CartContext from '../../../contexts/CartContext'
import CartBuyForm from '../CartBuyForm/CartBuyForm'

const CartMenu = ({ cartItems }) => {

    const { cartTotalAmount, clearCart } = useContext(CartContext)

    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(cartTotalAmount)
    }, [cartTotalAmount])

    const [showForm, setShowForm] = useState(false)
    function handleShowForm() {
        if (cartItems.length > 0) {
            setShowForm(!showForm)
        }
    }

    return (
        <>
            <div className='cartMenu'>
                <h3 className='cartTotal'>Total: <span>{total} USD</span></h3>
                <div className='cartMenu-btns'>
                    <div onClick={() => clearCart(false)} className={cartItems.length > 0 ? 'btn' : 'btn off'}>VACIAR</div>
                    <div onClick={(handleShowForm)} className={cartItems.length > 0 ? 'btn' : 'btn off'}>COMPRAR</div>
                </div>
            </div>
            {showForm && <CartBuyForm handleShowForm={handleShowForm} cartItems={cartItems} totalAmount={total} clearCart={clearCart} />}
        </>
    )
}

export default CartMenu