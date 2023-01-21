import { useState } from 'react'
import './App.css'
import FilterableProductTable from './components/FilterableProductTable'
import TicTacToe from './containers/TicTacToe'
const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  { category: 'Clean', price: '$1', stocked: true, name: 's' }
]

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <TicTacToe />
      {/* <FilterableProductTable products={PRODUCTS} /> */}
    </div>
  )
}

export default App
