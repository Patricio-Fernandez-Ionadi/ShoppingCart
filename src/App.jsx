/* eslint-disable no-unused-vars */
import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products"
import { useState } from "react"
import { Header } from "./components/Header"


function App() {

  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(prod => {
      return (
        prod.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          prod.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
