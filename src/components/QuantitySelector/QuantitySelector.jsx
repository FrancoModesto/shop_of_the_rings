import React, { useState } from 'react'

import './QuantitySelector.scss'

const QuantitySelector = (props) => {

    const stock = props.stock
    const [quantity, setQuantity] = useState(0)

    function handleChange(event) {
        const value = Math.min((Math.max(Number(event.target.value), 0)), stock)
        setQuantity(value)
    }

    function handleSum() {
        const value = Math.min((quantity + 1), stock)
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