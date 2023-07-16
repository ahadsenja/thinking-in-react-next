import FilterableProductTable from './components/FilterableProductTable'

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function Home() {
  return (
    <main className="flex flex-col w-1/3 p-5 bg-[#0F172A] rounded justify-center items-stretch">
      <FilterableProductTable products={PRODUCTS} />
    </main>
  )
}
