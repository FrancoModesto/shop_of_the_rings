import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './CartItem.scss'

import CartContext from '../../../../contexts/CartContext'
import QuantitySelector from '../../../QuantitySelector/QuantitySelector'

const CartItem = ({ cartItem }) => {

    const { removeItem, changeOnlyQuantity } = useContext(CartContext)

    function handleDelete() {
        removeItem(cartItem.id)
    }

    function handleQuantityChange(quantity) {
        changeOnlyQuantity(cartItem, quantity)
    }

    return (
        <li className='cartItem'>
            <div className='cartItem-info'>
                <Link to={`/item/${cartItem.id}`} className='cartItem-image'><img src={cartItem.image} alt={cartItem.name} /></Link>
                <h3>{cartItem.name}</h3>
                <h4>{cartItem.price} USD</h4>
            </div>
            <div className='cartItem-btns'>
                <QuantitySelector isInCart={true} stock={cartItem.stock} itemId={cartItem.id} handleQuantityChange={handleQuantityChange} />
                <div className='remove-btn' onClick={handleDelete}>X</div>
            </div>
        </li>
    )
}

export default CartItem