import React, { useState } from 'react'
import Board from '../components/TicTacToe/Board'

export default function TicTacToe () {
  const elements = 9
  const [lastChar, setLastChar] = useState('')
  const [history, setHistory] = useState([Array(elements).fill(null)])
  const currentSquares = history[history.length - 1]
  const resetBoard = () => {
    setHistory([Array(elements).fill(null)])
    setLastChar('')
  }

  function handlePlay (nextSquares, nextChar) {
    setHistory((prevSquares) => {
      return [...prevSquares, nextSquares]
    })
    setLastChar(nextChar)
    // TODO
  }
  console.log(history)
  return (
    <div className='game'>
      <div className='game-board'>
        <h4 style={{ textAlign: 'center', marginBottom: '4rem' }}>Tic Tac Toe</h4>
        <Board lastChar={lastChar} squares={currentSquares} onPlay={handlePlay} />
        <button style={{ border: '1px solid black', marginTop: '4rem' }} onClick={() => resetBoard()}>Reset</button>
      </div>
      <div className='game-info'>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}
