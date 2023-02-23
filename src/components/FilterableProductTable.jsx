import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { useState } from 'react'
const initialState = {
  inStockOnly: false,
  filterText: 'fruits'
}
export default function FilterableProductTable ({ products }) {
  const [state, setState] = useState(initialState)

  const handleCheckBox = (event) => {
    console.log(event)
    setState({ ...state, inStockOnly: event.target.checked })
  }

  const handleFilterText = (text) => {
    setState({ ...state, filterText: text })
  }

  return (
    <div>
      <SearchBar handleCheckBox={handleCheckBox} handleFilterText={handleFilterText} inStockOnly={state.inStockOnly} filterText={state.filterText} />
      <ProductTable
        products={products}
        inStockOnly={state.inStockOnly}
        filterText={state.filterText}
      />
    </div>
  )
}
