import React, { useContext } from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/CartContext'

function MealItem(props) {

  const Iprops = props?.data
  const cartCtx = useContext(CartContext)

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: Iprops.id,
      name: Iprops.name,
      amout: amount,
      price: Iprops.price,
      src: Iprops.imageLink,
    })
  }

  
  
  return (
    <div>
      <ul>
        <li>
          <div className={`flex justify-center flex-col items-center ${styles.FoodTopContainer} `} >
              <img className={styles.FoodImg}  src={Iprops?.imageLink} />
              <p>{Iprops?.name}</p>
          </div>

          <div className={`flex justify-between items-center ${styles.FoodInformation}`} >
            <p>{Iprops?.price} ₹ </p>
            <div className='flex flex-row justify-center items-center' >
              <MealItemForm onAddToCart={onAddToCartHandler} /> 
            </div>
          </div>
          
          
        </li>
      </ul>
    </div>
  )
}

export default MealItem