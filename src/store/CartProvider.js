import React, { useReducer } from 'react'
import CartContext from './CartContext'

const defualtCartData = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.totalAmount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defualtCartData;
}

function CartProvider(props) {

    const [cartState, setCartState] = useReducer(cartReducer, defualtCartData)

    const AdditemOntheCart = (item) => {
        setCartState({type: 'ADD', item: item})
    }


    const RemoveItemFromtheCart = (id) => {
        setCartState({type: 'REMOVE', id: id})
    }


    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: AdditemOntheCart,
        removeItem: RemoveItemFromtheCart,
    }

  return (
    <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider