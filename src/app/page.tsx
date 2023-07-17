import FilterableProductTable from './components/FilterableProductTable'
import { PRODUCTS } from "./helper/products";

export default function Home() {
  return (
    <main className="flex flex-col w-1/3 p-5 bg-[#0F172A] rounded justify-center items-stretch">
      <FilterableProductTable products={PRODUCTS} />
    </main>
  )
}
