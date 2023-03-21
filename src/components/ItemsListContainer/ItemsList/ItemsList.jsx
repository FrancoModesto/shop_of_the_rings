import React from 'react'
import { Link } from 'react-router-dom'

import './ItemsList.scss'

const ItemsList = (props) => {

    return (
        <ul className='itemsList'>
            {
                props.items.map(item => {
                    return (
                        <li key={item.id} className='item'>
                            <div className='item-image'><img src={item.image} alt={item.name} /></div>
                            <div className='item-info'>
                                <h3>{item.name}</h3>
                                <h4>{item.price} USD</h4>
                                <Link to={`/item/${item.id}`} className='item-detailBtn'>VER DETALLES</Link>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ItemsList