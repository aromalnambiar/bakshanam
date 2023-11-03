 import React, { useContext, useEffect, useState } from 'react'
import style from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/CartContext'

function HeaderCartButton(props) {

  const cartCtx = useContext(CartContext)

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  
  const { items } = cartCtx;
 
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  
  const btnBump = `${style.cart__button} ${
    btnIsHighlighted ? style.bump : ""
  }`;
  
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const bumpTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [items]);
  



  

  return (
    <>
    <button className={btnBump} onClick={props.onClick} >
        <CartIcon/>
        <span>Your Cart</span>
        <span className={style.badge} >
            {numberOfCartItems} 
        </span>
    </button>
    </>
  )
}

export default HeaderCartButton