/* eslint-disable react/prop-types */
import {Filters} from './'

export function Header({changeFilters}) {
  return (
    <>
    <h1>React Shop</h1>
    <Filters onChange={changeFilters} />
    </>
  )
}