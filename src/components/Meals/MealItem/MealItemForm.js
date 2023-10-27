import React, { useRef } from 'react';
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'

function MealItemForm(props) {

  const handleAmountRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className={styles.MealForm} >
      <Input 
      ref={handleAmountRef}
      input={{
        id: "1",
        type: "number",
        min: "1",
        step: "1",
        defaultValue: "1"
      }} />
      <button onClick={handleSubmit} >+ Add</button>
    </form>
  )
}

export default MealItemForm