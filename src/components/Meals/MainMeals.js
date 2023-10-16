import React from 'react'
import styles from '../Layout/Header.module.css'
import Img from '../../assets/header_img.png'
import Meals from './Meals';
import MealsSummary from './MealsSummary';
import { Slide } from "react-awesome-reveal";
import AvailableMeals from './AvailableMeals';

function MainMeals() {
  return (
    <>
      <div className={styles.homeContainer} >
              <div >
                <Meals/>
                <MealsSummary/>
              </div>
              <Slide direction='right'>
                  <img className={styles.bgImg} src={Img} alt="img" />
              </Slide>
              
      </div>
      <div className={` ${styles.FoodTitleContainer} `}>
          <h1  > Our Special </h1>
          <p>Explore the suggested menu items that we recommend.</p>
      </div>
      
      <AvailableMeals/>
    </>
  )
}

export default MainMeals