import React, { useReducer } from 'react'
import CartContext from './CartContext'

const defualtCartData = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amout

        const existingItemsInedx = state.items.findIndex(item => item.id === action.item.id)

        const existingItems = state.items[existingItemsInedx]

        let updatedItem;
        let updatedItems;

        if (joinItems) {
            const updatedItem = {
                ...existingItems,
                amout: existingItems.amout + action.item.amout
            }

            updatedItems = [...state.items]
            updatedItems[existingItemsInedx] = updatedItem


        } else {
            updatedItems = state.items.concat(action.item)
        }

        
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
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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