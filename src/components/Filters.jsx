/* eslint-disable react/prop-types */
import { useId, useState } from 'react'
import './Filters.css'

export function Filters({onChange}) {

  const [minPrice, setMinPrice] = useState(0)

	const minPriceFilterId = useId()
	const categoryFilterId = useId()

  const handleChangeMinPrice = () => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const hanldleChangeCategory = () => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }


  return (
    <>
      <section className='filters'>

        <div>
            <label htmlFor="price">Precio a partir de:</label>
            <input onChange={handleChangeMinPrice} type="range" name="price" id={minPriceFilterId} min={0} max={1000} />
            <span>${minPrice}</span>
        </div>


        <div>
            <label htmlFor="category">Categoria</label>
            <select name="category" id={categoryFilterId} onChange={hanldleChangeCategory}>
                <option value="all">Todas</option>
                <option value="laptops">Prtatiles</option>
                <option value="smartphones">Celulares</option>
            </select>
        </div>

      </section>
    </>
  )
}