import React from 'react'
import { SearchBarIface } from '@/app/interfaces/ProductIfaces'

export default function SearchBar({ filterText, inStockOnly, onFilterTextOnChange, onInStockOnlyOnChange }: SearchBarIface) {
  return (
    <form className="flex flex-col gap-2 w-full mb-5">
      <input 
        className="px-2 py-2 rounded text-gray-900" 
        type="text" 
        value={filterText}
        onChange={(e) => onFilterTextOnChange(e.target.value)}
        placeholder="Search products..." 
      />
      <label htmlFor="search">
        <input 
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyOnChange(e.target.checked)}
        />
        {" "}
        Only show products in stock
      </label>
    </form>
  )
}
