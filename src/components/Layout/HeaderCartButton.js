 import React from 'react'
import style from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

function HeaderCartButton() {
  return (
    <>
    <button className={style.cart__button} >
        <CartIcon/>
        <span>Your Cart</span>
        <span className={style.badge} >
            3 
        </span>
    </button>
    </>
  )
}

export default HeaderCartButton