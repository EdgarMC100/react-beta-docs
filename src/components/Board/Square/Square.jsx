import React from 'react'
import styles from './Square.module.css'
function Square ({ value, onSquareClick, disabled }) {
  return (
    <button className={styles.square} onClick={onSquareClick} disabled={disabled}>
      {value}
    </button>
  )
}

export default Square
