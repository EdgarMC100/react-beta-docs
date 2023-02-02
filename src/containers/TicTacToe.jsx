import React, { useState } from 'react'
import Board from '../components/Board'

export default function TicTacToe () {
  const elements = 9
  const [history, setHistory] = useState([Array(elements).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  // Squares rendered when the component is rendered for the first time and when the component is re-rendered.
  const currentSquares = history[currentMove]
  const xIsNext = currentMove % 2 === 0
  const [disabledButtons, setDisabledButtons] = useState(false)

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
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <h4 style={{ textAlign: 'center', marginBottom: '4rem' }}>Tic Tac Toe</h4>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} disabledButtons={disabledButtons} disableButtons={(value) => setDisabledButtons(value)} />
        <button style={{ border: '1px solid black', marginTop: '2rem', marginBottom: '2rem' }} onClick={() => resetBoard()}>Reset</button>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
