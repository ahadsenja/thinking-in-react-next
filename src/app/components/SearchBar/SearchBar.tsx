import React from 'react'

export default function SearchBar() {
  return (
    <form className="flex flex-col gap-2 w-full mb-5">
      <input className="px-2 py-2 rounded" type="search" placeholder="Search products..." />
      <label htmlFor="search">
        <input type="checkbox" />
        {" "}
        Only show products in stock
      </label>
    </form>
  )
}
