import React from 'react'

export default function ProductCategoryRow({ category }: { category: string }) {
  return (
    <>
      <tr>
        <th>{category}</th>
      </tr>
    </>
  )
}
