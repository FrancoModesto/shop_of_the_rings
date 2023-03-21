import React from 'react'

import './ItemDetail.scss'

const ItemDetail = (props) => {
    return (
        <div className='itemDetail'>
            <img src={props.item.image} alt={props.item.name} />
            <div className='itemInfo'>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <h3>{props.item.price} USD</h3>
                <div className='buy-btn'>AGREGAR AL CARRITO</div>
            </div>
        </div>
    )
}

export default ItemDetail