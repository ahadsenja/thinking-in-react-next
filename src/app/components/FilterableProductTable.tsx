'use client'
import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import ProductTable from './Product/ProductTable'

export default function FilterableProductTable() {
  return (
    <>
      <SearchBar />
      <ProductTable />
    </>
  )
}
