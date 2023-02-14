// eslint-disable-next-line no-unused-vars
import Square from './Square/Square'
import styles from './Board.module.css'
import { calculateWinner } from '../../utils'
// eslint-disable-next-line no-unused-vars
import Confetti from '../Confetti'

export default function Board ({ xIsNext, squares, onPlay, disabledButtons, disableButtons }) {
  const handleClick = (id) => {
    if (squares[id] || calculateWinner(squares)[0]) {
      return undefined
    }
    const squaresnextSquares = squares.slice()
    if (xIsNext) {
      squaresnextSquares[id] = 'x'
    } else {
      squaresnextSquares[id] = 'o'
    }
    onPlay(squaresnextSquares)
  }

  const renderBoard = () => {
    const winnerLine = winnerSquares
    const Squares = squares.map((square, index) => {
      return (
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={function () { console.log('Checking acces to the closure', squares); return handleClick(index) }}
          disabled={disabledButtons}
          winnerColor={winnerLine?.includes(index) ? 'green' : ''}
        />
      )
    })
    return Squares
  }

  const [winner, winnerSquares] = calculateWinner(squares)
  console.log(winnerSquares, 'WS')
  let status
  if (winner) {
    disableButtons(true)
    status = `Winner: ${winner}`
  } else if (!squares.includes(null)) {
    status = 'Empate'
  } else {
    status = `Next player: ${
      xIsNext ? 'x' : 'o'
    }`
  }

  return (
    <div>
      {winner && <Confetti />}
      <div className={styles.status}>{status}</div>
      <div className={styles.gridContainer}>{renderBoard()}</div>
    </div>
  )
}
