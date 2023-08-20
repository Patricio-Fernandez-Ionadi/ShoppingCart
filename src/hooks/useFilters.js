import { useState } from "react"

export function useFilters() {
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

  return {filters, filterProducts, setFilters}
}