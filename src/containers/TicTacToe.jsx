import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Board from '../components/Board'
import styles from './TicTacToe.module.css'

export default function TicTacToe () {
  const elements = 9
  const [history, setHistory] = useState([Array(elements).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  // Squares rendered when the component is rendered for the first time and when the component is re-rendered.
  const currentSquares = history[currentMove]
  const xIsNext = currentMove % 2 === 0
  const [disabledButtons, setDisabledButtons] = useState(false)
  const [isOrdered, setIsOrdered] = useState(false)

  const resetBoard = () => {
    setHistory([Array(elements).fill(null)])
    setCurrentMove(0)
    setDisabledButtons(false)
  }

  function handlePlay (nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory((prevSquares) => {
      console.log(prevSquares)
      return nextHistory
    })
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo (nextMove) {
    setDisabledButtons(false)
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = 'Go to move #' + move
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        {
        move === currentMove ? <p className={styles.textCurrentMove}>{`You are at move # ${move}`}</p> : <button onClick={() => jumpTo(move)}>{description}</button>
        }
      </li>
    )
  })

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <h4 className={styles.gameBoardTitle}>Tic Tac Toe</h4>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} disabledButtons={disabledButtons} disableButtons={(value) => setDisabledButtons(value)} />
        <button className={styles.resetButton} onClick={() => resetBoard()}>Reset</button>
      </div>
      <div className={styles.gameInfo}>
        <ul>{isOrdered ? moves.reverse() : moves}</ul>
      </div>
      <button className={styles.orderButton} onClick={() => setIsOrdered(!isOrdered)}>Order</button>
    </div>
  )
}
