import React, { createContext, useState } from 'react';

const CartContext = createContext()

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    function clearCart() {
        setCartItems([])
    }

    function isInCart(id) {
        return cartItems.find(cartItem => cartItem.id === id)
    }

    function removeItem(id) {
        const newCartItems = cartItems.filter(cartItem => cartItem.id !== id)
        setCartItems(newCartItems)
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
        }
    }

    function cartLength() {
        return cartItems.map(item => item.quantity).reduce((accum, curr) => accum + curr, 0)
    }

    function oneItemQuantity(id) {
        return isInCart(id) ? isInCart(id).quantity : 0
    }

    return (
        <CartContext.Provider value={{ cartItems, cartLength, oneItemQuantity, addItem, removeItem, clearCart }}>
            {props.children}
        </CartContext.Provider>
    )

}

export { CartProvider }
export default CartContext