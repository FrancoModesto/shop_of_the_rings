import React, { useContext } from 'react'

import './ItemDetail.scss'

import CartContext from '../../Context/CartContext';
import QuantitySelector from '../../QuantitySelector/QuantitySelector'

const ItemDetail = (props) => {

    const item = props.item

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
            <img src={item.image} alt={item.name} />
            <div className='itemInfo'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3>{item.price} USD</h3>
                <div className='itemBtns'>
                    <QuantitySelector itemId={item.id} stock={item.stock} handleQuantityChange={handleQuantityChange} />
                    <div className='buy-btn' onClick={handleAdd}>AGREGAR AL CARRITO</div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail