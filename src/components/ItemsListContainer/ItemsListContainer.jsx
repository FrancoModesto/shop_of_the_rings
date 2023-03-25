import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import './ItemsListContainer.scss'

import ItemsList from './ItemsList/ItemsList'
import Loader from '../Loader/Loader'

const ItemsListContainer = () => {

    const { categoryID } = useParams()

    const [items, setItems] = useState()

    function sortByPrice(a, b) {
        return ((a.price > b.price) ? 1 : -1)
    }

    function obtenerDocs(want) {
        getDocs(want)
            .then((snapshot) => {
                if (snapshot === 0) {
                    console.log('No items found in data base.')
                } else {
                    const rawItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    setItems(rawItems.sort(sortByPrice))
                }
            })
            .catch((error) => {
                console.log('Error getting documents: ', error)
            })
    }

    useEffect(() => {
        setItems(null)
        const db = getFirestore()

        if (categoryID) {
            const q = query(
                collection(db, 'items'),
                where('category', '==', categoryID)
            )
            obtenerDocs(q)
        } else {
            const ref = collection(db, 'items')
            obtenerDocs(ref)
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryID])

    return (
        <div className='itemsListContainer'>
            {categoryID ? <h2>{categoryID === 'rings' ? 'Anillos' : 'Otros'}</h2> : <h2>Productos de Tierra Media</h2>}
            {items ? <ItemsList items={items} /> : <Loader />}
        </div>
    )
}

export default ItemsListContainer