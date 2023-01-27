import React, { useState } from 'react'
import Board from '../components/TicTacToe/Board'

export default function TicTacToe () {
  const elements = 9
  const [lastChar, setLastChar] = useState([])
  const [history, setHistory] = useState([Array(elements).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const currentSquares = history[currentMove]
  const xIsNext = currentMove % 2 === 0

  const resetBoard = () => {
    setHistory([Array(elements).fill(null)])
    setLastChar('')
  }

  function handlePlay (nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory((prevSquares) => {
      return nextHistory
    })
    setCurrentMove(nextHistory.length - 1)
    // const nextChar = lastChar[lastChar.length - 1] === 'x' ? 'o' : 'x'
    // console.log(lastChar, 'CHARS', nextChar)
    // setLastChar([...lastChar, nextChar])
  }
  function jumpTo (nextMove) {
    setCurrentMove(nextMove)
    // setXIsNext(nextMove % 2 === 0)
    // const nextChar = lastChar[nextMove] === 'x' ? 'o' : 'x'
    // setLastChar(nextChar)
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
  console.log(history)
  return (
    <div className='game'>
      <div className='game-board'>
        <h4 style={{ textAlign: 'center', marginBottom: '4rem' }}>Tic Tac Toe</h4>
        <Board xIsNext={xIsNext} lastChar={lastChar} squares={currentSquares} onPlay={handlePlay} />
        <button style={{ border: '1px solid black', marginTop: '4rem' }} onClick={() => resetBoard()}>Reset</button>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
