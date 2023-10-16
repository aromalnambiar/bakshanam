import React from 'react'
import styles from './MealsSummary.module.css'
import { Slide } from "react-awesome-reveal";

function MealsSummary() {
  return (
    <div>
      <Slide  >
        <p className={styles.MealsDescription}  >
          Discover a world of culinary delights, order with a tap, and savor diverse dishes at your doorstep. <span> Convenience, satisfaction, one click away. </span> 
        </p>
      </Slide>
    </div>
  )
}

export default MealsSummary