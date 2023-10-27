import React, { forwardRef } from 'react'
import styles from './Input.module.css'

const Input = forwardRef((props, ref) =>  {
  return (
    <div className={styles.Input} >
      <input ref={ref} id={props?.input?.id} {...props.input} />
    </div>
  )
})

export default Input