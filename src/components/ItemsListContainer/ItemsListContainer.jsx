import React from 'react'
import { useParams } from 'react-router-dom'

import './ItemsListContainer.scss'

const ItemsListContainer = () => {

    const { categoryID } = useParams()

    return (
        <div className='itemsListContainer'>
            {categoryID ? <h2>{categoryID === 'rings' ? 'Anillos' : 'Otros'}</h2> : <h2>Productos de Tierra Media</h2>}
        </div>
    )
}

export default ItemsListContainer