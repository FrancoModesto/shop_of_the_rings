import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

//Toastify Notification
const notify = (msg, iconPath) => {
    toast(msg, {
        icon: () => <img src={iconPath} alt="Toast Icon" />
    })
}

const CartContext = createContext()

const CartProvider = (props) => {

    const localCart = JSON.parse(localStorage.getItem("SOTR-Cart"))
    const [cartItems, setCartItems] = useState(localCart ? localCart : [])

    useEffect(() => {
        localStorage.setItem("SOTR-Cart", JSON.stringify(cartItems))
    }, [cartItems])

    function clearCart(inBuy) {
        if (cartItems.length > 0) {
            setCartItems([])
            if (inBuy) {
                notify('COMPRA REALIZADA', '/assets/done-icon.svg')
            } else {
                notify('CARRITO VACIADO', '/assets/x-icon.svg')
            }
        }
    }

    function isInCart(id) {
        return cartItems.find(cartItem => cartItem.id === id)
    }

    function removeItem(id) {
        const newCartItems = cartItems.filter(cartItem => cartItem.id !== id)
        setCartItems(newCartItems)
        notify('ELIMINADO DEL CARRITO', '/assets/sub-icon.svg')
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
            notify('AGREGADO AL CARRITO', '/assets/sum-icon.svg')
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

    return (
        <CartContext.Provider value={{ cartItems, cartLength, oneItemQuantity, addItem, changeOnlyQuantity, removeItem, clearCart, cartTotalAmount }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext