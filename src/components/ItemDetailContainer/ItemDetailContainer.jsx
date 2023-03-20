import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {

    const { itemID } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        setItem(null)

        const db = getFirestore()
        const ref = doc(db, 'items', itemID)

        getDoc(ref).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() })
            } else {
                console.log('Item not found.')
            }
        })

    }, [itemID])

    console.log(item)

    return (
        <div className='itemDetailContainer'>
            {item ? 'ItemDetail' : 'Loader'}
        </div>
    )
}

export default ItemDetailContainer