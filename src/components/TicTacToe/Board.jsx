import Square from './Square/Square'
import styles from './Board.module.css'
import { useState } from 'react'
import { calculateWinner } from '../../utils'
export default function Board () {
  const elements = 9
  // Another implementation to check if some square is already been changed before
  // const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(elements).fill(null))
  const [lastChar, setLastChar] = useState('')
  let disabledButtons = false

  const handleClick = (id) => {
    // if (squares[id] || calculateWinner(id)) {
    //   return
    // }
    if (squares[id] || calculateWinner(squares)) {
      // console.log('The Winner is: ', squares[id])
      // window.alert('The Winner is: ', squares[id])
      return
    }
    const newSquares = squares.slice()
    // Another implementation to insert x or o character
    // if (xIsNext) {
    //   newSquares[id] = 'x'
    // } else {
    //   newSquares[id] = 'o'
    // }
    // setSquares(nextSquares)
    // setXIsNext(!xIsNext)

    let squareValue = newSquares[id]
    // if (squareValue === null) {
    squareValue = lastChar.toLowerCase() === 'x' ? 'o' : 'x'
    setLastChar(squareValue)
    newSquares[id] = squareValue
    setSquares(newSquares)
    // }
  }

  const renderBoard = () => {
    const Squares = squares.map((square, index) => {
      return <Square className={styles.gridContainer} key={index} value={squares[index]} onSquareClick={() => handleClick(index)} disabled={disabledButtons} />
    })
    return Squares
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    disabledButtons = true
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${lastChar === 'x' ? 'o' : 'x'}`
  }

  return (
    <div>
      {lastChar ? <div className={styles.status}>{status}</div> : null}
      <div className={styles.gridContainer}>
        {
        renderBoard(elements)
      }
      </div>
    </div>

  )
}
