import React from 'react'
import { Link } from 'react-router-dom'

import './Item.scss'

const Item = ({ item }) => {
    return (
        <li className='item'>
            <div className='item-image'><img src={item.image} alt={item.name} /></div>
            <div className='item-info'>
                <h3>{item.name}</h3>
                <h4>{item.price} USD</h4>
                <Link to={`/item/${item.id}`}>VER DETALLES</Link>
            </div>
        </li>
    )
}

export default Item