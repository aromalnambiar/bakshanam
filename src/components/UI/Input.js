import React from 'react'
import styles from './Input.module.css'

function Input(props) {
  return (
    <div className={styles.Input} >
      <input id={props?.input?.id} {...props.input} />
    </div>
  )
}

export default Input