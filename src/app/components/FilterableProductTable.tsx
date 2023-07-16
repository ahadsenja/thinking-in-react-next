'use client'
import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import ProductTable from './Product/ProductTable'

export default function FilterableProductTable({ products }: { products: any[] }) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  )
}
