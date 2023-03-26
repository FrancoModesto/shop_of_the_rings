import React, { useContext } from 'react'

import './ItemDetail.scss'

import CartContext from '../../../contexts/CartContext'
import QuantitySelector from '../../QuantitySelector/QuantitySelector'

const ItemDetail = ({ item }) => {

    let quantity = 0
    function handleQuantityChange(childQuantity) {
        quantity = childQuantity
    }

    const { addItem } = useContext(CartContext)
    function handleAdd() {
        addItem(item, quantity)
    }

    return (
        <div className='itemDetail'>
            <div className='itemImage'><img src={item.image} alt={item.name} /></div>
            <div className='itemInfo'>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <h2>{item.price} USD</h2>
                <div className='itemBtns'>
                    <QuantitySelector itemId={item.id} stock={item.stock} handleQuantityChange={handleQuantityChange} />
                    <div className='btn' onClick={handleAdd}>AGREGAR AL CARRITO</div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail