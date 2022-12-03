import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
export default function FilterableProductTable({ products }) {
  const [isOnlyStockProductsChecked, setIsOnlyStockProductsChecked] =
    useState(false);

  const handleCheckBox = (event) => {
    console.log(event);
    setIsOnlyStockProductsChecked(event.target.checked);
  };
  return (
    <div>
      <SearchBar handleCheckBox={handleCheckBox} />
      <ProductTable
        products={products}
        showOnlyStockProducts={isOnlyStockProductsChecked}
      />
    </div>
  );
}
