export interface SearchBarIface { 
  filterText: string, 
  inStockOnly: boolean,
  onFilterTextOnChange: (e: any) => void,
  onInStockOnlyOnChange: (e: any) => void
}

export interface ProductTableIface {
  products: any[], 
  filterText: string, 
  inStockOnly: boolean
}