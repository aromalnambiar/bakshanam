import React from 'react'
import styles from './MealsSummary.module.css'
import { Slide } from "react-awesome-reveal";


function Meals() {
  return (
    <div className={styles.mealsHeadeing} > 
    <Slide >
      <p>
        Delicious Moments,<span> Delivered to Your Door.</span>
      </p>
     </Slide>
    </div>
  )
}

export default Meals