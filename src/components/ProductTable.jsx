import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import {
  findProductCategories,
  orderProductsByCategory
} from '../utils/products'

export default function ProductTable ({ products, showOnlyStockProducts }) {
  console.log(products)
  const categories = findProductCategories(products)
  const orderedCategory = orderProductsByCategory(products, categories)
  const rows = []
  let lastCategory = null
  orderedCategory.forEach((product, index) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={`${product.category}-${index}`}
        />
      )
    }
    if (showOnlyStockProducts) {
      if (product.stocked) {
        rows.push(
          <ProductRow product={product} key={`${product.name}-${index}`} />
        )
      }
    } else {
      rows.push(
        <ProductRow product={product} key={`${product.name}-${index}`} />
      )
    }
    lastCategory = product.category
  })

  return (
    <>
      <table
        style={{
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: '0 1em'
        }}
      >
        <thead>
          <tr>
            <th style={{ width: '50%' }}>Name</th>
            <th style={{ width: '50%' }}>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  )
}
