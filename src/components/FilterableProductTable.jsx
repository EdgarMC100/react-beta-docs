import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { useState } from 'react'
const initialState = {
  isOnlyStockProductsChecked: false,
  searchedText: ''
}
export default function FilterableProductTable ({ products }) {
  const [state, setState] = useState(initialState)

  const handleCheckBox = (event) => {
    console.log(event)
    setState({ ...state, isOnlyStockProductsChecked: event.target.checked })
    setIsOnlyStockProductsChecked(event.target.checked)
  }
  return (
    <div>
      <SearchBar handleCheckBox={handleCheckBox} />
      <ProductTable
        products={products}
        showOnlyStockProducts={state.isOnlyStockProductsChecked}
      />
    </div>
  )
}
