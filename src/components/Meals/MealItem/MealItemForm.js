import React from 'react';
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'

function MealItemForm(props) {
  return (
    <form className={styles.MealForm} >
      <Input input={{
        id: "1",
        type: "number",
        min: "1",
        step: "1",
        defaultValue: "1"
      }} />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm