import React, { useState, useEffect } from 'react'
import './index.css'
export default function Square ({ isX, setIsX }) {
  const [value, setValue
  ] = useState(null)
  const squaresValues = []

  useEffect(() => {
    const squares = document.getElementsByClassName('square')
    for (let i = 0; i < squares.length; i++) {
      squaresValues.push(squares.item(i).textContent)
    }
    console.log(squaresValues)
  }, [value])

  const clickHandler = (e) => {
    if (e.target.textContent === '') {
      // const squares = document.getElementsByClassName('square')
      // console.log(squares.length)
      // for (let i = 0; i < squares.length; i++) {
      //   squaresValues.push(squares.item(i).textContent)
      // }
      // const squaresTextContent = squares.map((s) => s.target.textContent)
      // squaresTextContent.forEach((s) => s)
      // squares
      console.log(squaresValues)
      if (isX) {
        setIsX(false)
        setValue('O')
        return
      }
      setIsX(true)
      setValue('X')
      console.log(squaresValues)
      // Comparing las value used in a square
    }
  }
  return (
    <>
      <button className='square' onClick={clickHandler}>
        {value}
      </button>
    </>
  )
}
