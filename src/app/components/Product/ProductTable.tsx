import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable({ products }: { products: any[] }) {
  const rows: any[] = [];
  let lastCategory: any = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }
    
    rows.push(
      <ProductRow product={product} key={product.name} />
    )

    lastCategory = product.category;
  })

  return (
    <>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    </>
  )
}
