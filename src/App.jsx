/* eslint-disable no-unused-vars */
import { useState } from "react"

import { products as initialProducts } from "./mocks/products.json"

import { useFilters } from "./hooks"

import { Footer, Header, Products } from "./components"

function App() {

  const [products] = useState(initialProducts)
  const {filters, filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
      <Footer filters={filters}/>
    </>
  )
}

export default App
