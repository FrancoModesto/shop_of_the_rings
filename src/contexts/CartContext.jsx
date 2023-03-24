import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext()

const addedNotify = () => {
    toast('AGREGADO AL CARRITO', {
        icon: () => <img src="/assets/sum-icon.svg" alt="" />
    })
}

const removedNotify = () => {
    toast('ELIMINADO DEL CARRITO', {
        icon: () => <img src="/assets/sub-icon.svg" alt="" />
    })
}

const clearedNotify = () => {
    toast('CARRITO VACIADO', {
        icon: () => <img src="/assets/x-icon.svg" alt="" />
    })
}

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    function clearCart() {
        if (cartLength() > 0) {
            setCartItems([])
            clearedNotify()
        }
    }

    function isInCart(id) {
        return cartItems.find(cartItem => cartItem.id === id)
    }

    function removeItem(id) {
        const newCartItems = cartItems.filter(cartItem => cartItem.id !== id)
        setCartItems(newCartItems)
        removedNotify()
    }

    function addItem(item, quantity) {
        if (quantity !== 0) {
            if (isInCart(item.id)) {
                setCartItems(
                    cartItems.map(cartItem => (
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + quantity }
                            : cartItem
                    )))
            } else {
                setCartItems([...cartItems, { ...item, quantity: quantity }])
            }
            addedNotify()
        }
    }

    function cartLength() {
        return cartItems.map(item => item.quantity).reduce((accum, curr) => accum + curr, 0)
    }

    function oneItemQuantity(id) {
        return isInCart(id) ? isInCart(id).quantity : 0
    }

    function changeOnlyQuantity(item, quantity) {
        setCartItems(
            cartItems.map(cartItem => (
                cartItem.id === item.id
                    ? { ...cartItem, quantity: quantity }
                    : cartItem
            )))
    }

    function cartTotalAmount() {
        return cartItems.map(item => item.quantity * item.price).reduce((accum, curr) => accum + curr, 0)
    }

    function buyItems() {
        if (cartLength() > 0) {
            console.log('Comprado!')
        }
    }

    return (
        <CartContext.Provider value={{ cartItems, cartLength, oneItemQuantity, addItem, changeOnlyQuantity, removeItem, clearCart, cartTotalAmount, buyItems }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext