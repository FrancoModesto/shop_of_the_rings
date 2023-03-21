import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import './ItemDetailContainer.scss'

import ItemDetail from './ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'

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

    return (
        <div className='itemDetailContainer'>
            {item ? <ItemDetail item={item} /> : <Loader />}
        </div>
    )
}

export default ItemDetailContainer