import React from 'react'
import Board from '../components/TicTacToe/Board'

export default function TicTacToe () {
  const isGridEnabled = true
  return (
    <>
      <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>Tic Tac Toe Styled with {isGridEnabled ? 'CSS GRID' : 'Clear:both property'}</h4>
      <Board isGridEnabled={isGridEnabled} />
    </>
  )
}
