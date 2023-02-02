import React from 'react'
import './index.css'
function Square ({ value, onSquareClick, disabled }) {
  return (
    <button className='square' onClick={onSquareClick} disabled={disabled}>
      {value}
    </button>
  )
}

/* function customComparator (prevProps, nextProps) {
  if (prevProps.value === nextProps.value) {
    return true
  }
  return false
} */

// export default memo(Square)
export default Square
