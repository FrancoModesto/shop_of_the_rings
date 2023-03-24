import React, { useContext, useEffect, useState } from 'react'

import './QuantitySelector.scss'

import CartContext from '../../contexts/CartContext'

const QuantitySelector = ({ isInCart, stock, itemId, handleQuantityChange }) => {

    const { oneItemQuantity } = useContext(CartContext)
    let actualStock = stock - oneItemQuantity(itemId)

    const [quantity, setQuantity] = useState(isInCart ? oneItemQuantity(itemId) : 0)

    useEffect(() => {
        if (!isInCart) {
            setQuantity(0)
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualStock])

    useEffect(() => {
        handleQuantityChange(quantity)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity])

    function handleChange(event) {
        const value = Math.min((Math.max(Number(event.target.value), isInCart ? 1 : 0)), isInCart ? stock : actualStock)
        setQuantity(value)
    }

    function handleSum() {
        const value = Math.min((quantity + 1), isInCart ? stock : actualStock)
        setQuantity(value)
    }

    function handleSub() {
        const value = Math.max((quantity - 1), isInCart ? 1 : 0)
        setQuantity(value)
    }

    return (
        <div className='quantitySelector'>
            <div className='quantity-btn' onClick={handleSub}>-</div>
            <input type='number' name='quantitySelector' value={quantity} onChange={handleChange} />
            <div className='quantity-btn' onClick={handleSum}>+</div>
        </div>
    )
}

export default QuantitySelector