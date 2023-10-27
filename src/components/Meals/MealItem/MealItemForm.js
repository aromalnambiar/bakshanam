import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'

function MealItemForm(props) {

  const [isValidForm, setIsValidForm] = useState(true)

  const AmountRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const EnterAmountChar = AmountRef.current.value 
    const EnterAmount = +EnterAmountChar

    if (EnterAmount?.length === 0 || EnterAmount < 1) {
      setIsValidForm(false)
      return
    }

    props.onAddToCart(EnterAmount)

  }

  return (
    <form className={styles.MealForm} >
      <Input 
      ref={AmountRef}
      input={{
        id: "1",
        type: "number",
        min: "1",
        step: "1",
        defaultValue: "1"
      }} />
      <button onClick={handleSubmit} >+ Add</button>
      {!isValidForm && <p className='text-red' >Please enter the valid amount</p>}
    </form>
  )
}

export default MealItemForm