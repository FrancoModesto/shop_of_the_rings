import React from 'react'

import './ItemsList.scss'

import Item from './Item/Item'

const ItemsList = ({ items }) => {

    return (
        <ul className='itemsList'>
            {items.map(item => <Item key={item.id} item={item} />)}
        </ul>
    )
}

export default ItemsList