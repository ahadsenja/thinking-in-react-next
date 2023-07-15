import React from 'react'

export default function ProductRow({ product }: { product: any[] }) {
  const name = product.stocked ? product.name :
    <span className="text-red-500">
      { product.name }
    </span>

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  )
}
