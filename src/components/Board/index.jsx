import Square from './Square/Square'
import styles from './Board.module.css'
import { calculateWinner } from '../../utils'
export default function Board ({ xIsNext, squares, lastChar, onPlay }) {
  // Another implementation to check if some square is already been changed before
  let disabledButtons = false

  const handleClick = (id) => {
    if (squares[id] || calculateWinner(squares)) {
      return undefined
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[id] = 'x'
    } else {
      nextSquares[id] = 'o'
    }
    // nextSquares[id] = lastChar[lastChar.length - 1] === 'x' ? 'o' : 'x'
    onPlay(nextSquares)
  }

  const renderBoard = () => {
    const Squares = squares.map((square, index) => {
      return (
        <Square
          className={styles.gridContainer}
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
          disabled={disabledButtons}
        />
      )
    })
    return Squares
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    disabledButtons = true
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${
      lastChar[lastChar.length - 1] === 'x' ? 'o' : 'x'
    }`
  }

  return (
    <div>
      {lastChar ? <div className={styles.status}>{status}</div> : null}
      <div className={styles.gridContainer}>{renderBoard()}</div>
    </div>
  )
}
