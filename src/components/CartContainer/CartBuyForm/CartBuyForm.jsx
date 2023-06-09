import React, { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

import './CartBuyForm.scss'

const CartBuyForm = ({ handleShowForm, totalAmount, cartItems, clearCart }) => {

    const [nameValue, setNameValue] = useState('')
    function handleNameChange(event) {
        if (event.target.value.length > 30) {
            setNameValue(event.target.value.slice(0, 30))
        } else {
            setNameValue(event.target.value)
        }
    }

    const [emailValue, setEmailValue] = useState('')
    function handleEmailChange(event) {
        if (event.target.value.length > 50) {
            setEmailValue(event.target.value.slice(0, 50))
        } else {
            setEmailValue(event.target.value)
        }
    }

    function buyItems(buyerData) {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')

        const order = {
            buyer: {
                name: buyerData.name,
                email: buyerData.email
            },
            items: cartItems,
            total: totalAmount
        }

        addDoc(ordersCollection, order)
            .then((docRef) => {
                console.log('Document successfully added! Order ID:', docRef.id)
                handleShowForm()
                clearCart(true)
            })
            .catch((error) => {
                console.log('Error adding document:', error)
            })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        buyItems(data)
    }

    return (
        <div className='cartBuyForm'>
            <form onSubmit={handleSubmit}>
                <h2>Datos del Comprador</h2>
                <div className='formCells'>
                    <input onChange={handleNameChange} value={nameValue} type="text" name='name' placeholder='Nombre' title='' required autoComplete="off" />
                    <input onChange={handleEmailChange} value={emailValue} type="email" name='email' placeholder='Email' title='' required autoComplete="off" />
                </div>
                <h3>Total: <span>{totalAmount} USD</span></h3>
                <div className='formBtns'>
                    <div className='btn' onClick={handleShowForm}>CANCELAR</div>
                    <input className='btn' type="submit" value="COMPRAR" />
                </div>
            </form>
        </div>
    )
}

export default CartBuyForm