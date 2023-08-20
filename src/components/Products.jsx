/* eslint-disable react/prop-types */
import {products} from '../mocks/products.json'
import { useFilters } from '../hooks'
import {AddToCartIcon} from './Icons.jsx'
import './Products.css'

export function Products() {

	const {filterProducts} = useFilters()
	const filteredProducts = filterProducts(products)

	return (
		<main className='products'>
			<ul>
				{
					filteredProducts.slice(0, 10).map(product => (
						<li key={product.id}>
							<img src={product.thumbnail} alt={product.title} />
							<div>
								<strong>{product.title} - ${product.price}</strong>
							</div>
							<div>
								<button>
									<AddToCartIcon />
								</button>
							</div>
						</li>
					))
				}
			</ul>
    </main>
  )
}