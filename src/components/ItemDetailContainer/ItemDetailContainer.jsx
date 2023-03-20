import React from 'react'
import { useParams } from 'react-router-dom'

import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {

    const { itemID } = useParams()

    return (
        <div className='ItemDetailContainer'>{itemID}</div>
    )
}

export default ItemDetailContainer