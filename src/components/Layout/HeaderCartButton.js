 import React, { useContext } from 'react'
import style from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/CartContext'

function HeaderCartButton(props) {

  const cartCtx = useContext(CartContext)

  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <>
    <button className={style.cart__button} onClick={props.onClick} >
        <CartIcon/>
        <span>Your Cart</span>
        <span className={style.badge} >
            {numberOfItems} 
        </span>
    </button>
    </>
  )
}

export default HeaderCartButton