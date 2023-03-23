import React from 'react'
import { Link } from 'react-router-dom'

import './ItemsList.scss'

const ItemsList = ({ items }) => {

    return (
        <ul className='itemsList'>
            {
                items.map(item => (
                    <li key={item.id} className='item'>
                        <div className='item-image'><img src={item.image} alt={item.name} /></div>
                        <div className='item-info'>
                            <h3>{item.name}</h3>
                            <h4>{item.price} USD</h4>
                            <Link to={`/item/${item.id}`} className='item-detailBtn'>VER DETALLES</Link>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default ItemsList