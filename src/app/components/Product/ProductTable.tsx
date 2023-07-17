import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface ProductTableIface {
  products: any[], 
  filterText: string, 
  inStockOnly: boolean
}

export default function ProductTable({ products, filterText, inStockOnly }: ProductTableIface) {
  const rows: any[] = [];
  let lastCategory: any = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return
    }
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
