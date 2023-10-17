import React from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'

function MealItem(props) {

  const Iprops = props?.data
  
  return (
    <div>
      <ul>
        <li>
          <div className={`flex justify-center flex-col items-center ${styles.FoodTopContainer} `} >
              <img className={styles.FoodImg}  src={Iprops?.imageLink} />
              <p>{Iprops?.name}</p>
          </div>

          <div className={`flex justify-between items-center ${styles.FoodInformation}`} >
            <p>{Iprops?.price} $ </p>
            <div className='flex flex-row justify-center items-center' >
              <MealItemForm/> 
            </div>
          </div>
          
          
        </li>
      </ul>
    </div>
  )
}

export default MealItem