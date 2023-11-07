import React, { useReducer } from 'react'
import CartContext from './CartContext'

const defualtCartData = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingItemsInedx = state.items.findIndex(item => item.id === action.item.id)

        const existingItems = state.items[existingItemsInedx]

        let updatedItems;

        if (existingItems) {
            const updatedItem = {
                ...existingItems,
                amount: existingItems.amount + action.item.amount
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

    if (action.type === "REMOVE") {
        
        const existingItemsInedx = state.items.findIndex(item => item.id === action.id)

        const existingItems = state.items[existingItemsInedx]

        const updatedTotalAmount = state.totalAmount - existingItems.price 

        let updatedItems;

        if (existingItems.amount === 1) {
            
            updatedItems = state.items.filter(item => item.id !== action.id)

        } else {
            const updatedItem = {
                ...existingItems,
                amount: existingItems.amount - 1
            }

            updatedItems = [...state.items]
            updatedItems[existingItemsInedx] = updatedItem
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