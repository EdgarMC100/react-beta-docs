import Square from './Square/Square'
import styles from './Board.module.css'
import { useState } from 'react'
export default function Board ({ isGridEnabled }) {
  const elements = 9
  // console.log(Array(elements).keys())
  const squares = Array.from(Array(elements).keys())
  const [isX, setIsX] = useState(false)
  const renderBoard = () => {
    if (isGridEnabled) {
      const Squares = squares.map((square, index) => {
        return <Square className={styles.gridContainer} key={index} isX={isX} setIsX={setIsX} />
      })
      return Squares
    }
    const jsxElement = (id) => (
      <Square key={id} />
    )
    const jsxElements = []
    const jsxElements2 = []
    for (let index = 0; index < squares.length; index++) {
      jsxElements.push(jsxElement(index))
      if ((index + 1) % 3 === 0) {
        jsxElements2.push(
          <div className={isGridEnabled ? null : styles.boardRow} key={index}>
            {jsxElements.slice(index - 2, index + 1)}
          </div>
        )
      }
    }
    return jsxElements2
  }

  return (
    <div className={isGridEnabled ? styles.gridContainer : null}>
      {
        renderBoard(elements)
      }
    </div>
  )
}