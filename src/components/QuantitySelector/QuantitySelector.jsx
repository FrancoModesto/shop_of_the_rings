import React, { useContext, useEffect, useState } from 'react'

import './QuantitySelector.scss'

import CartContext from '../Context/CartContext'

const QuantitySelector = (props) => {

    const { oneItemQuantity } = useContext(CartContext)
    const stock = props.stock
    let actualStock = stock - oneItemQuantity(props.itemId)

    useEffect(() => {
        setQuantity(0)
    }, [actualStock])

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        props.handleQuantityChange(quantity)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity])

    function handleChange(event) {
        const value = Math.min((Math.max(Number(event.target.value), 0)), actualStock)
        setQuantity(value)
    }

    function handleSum() {
        const value = Math.min((quantity + 1), actualStock)
        setQuantity(value)
    }

    function handleSub() {
        const value = Math.max((quantity - 1), 0)
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