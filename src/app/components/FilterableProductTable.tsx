'use client'
import React, { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import ProductTable from './Product/ProductTable'

export default function FilterableProductTable({ products }: { products: any[] }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextOnChange={setFilterText} onInStockOnlyOnChange={setInStockOnly} />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </>
  )
}
