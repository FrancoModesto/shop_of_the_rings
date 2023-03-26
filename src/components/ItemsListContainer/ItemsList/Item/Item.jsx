import React from 'react'
import { Link } from 'react-router-dom'

import './Item.scss'

const Item = ({ item }) => {
    return (
        <li className='item'>
            <div className='item-image'><img src={item.image} alt={item.name} /></div>
            <div className='item-info'>
                <h2>{item.name}</h2>
                <h3>{item.price} USD</h3>
                <Link to={`/item/${item.id}`} className='btn'>VER DETALLES</Link>
            </div>
        </li>
    )
}

export default Item