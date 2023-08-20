/* eslint-disable react/prop-types */
import { products } from "../mocks/products.json";
import { useFilters } from "../hooks";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import "./Products.css";
import { useCart } from "../hooks/useCart";

export function Products() {
	const { filterProducts } = useFilters();
	const filteredProducts = filterProducts(products);

	const { addToCart, cart, removeFromCart } = useCart();

	const checkProductInCart = (prod) => {
		return cart.some((p) => p.id === prod.id);
	};

	return (
		<main className="products">
			<ul>
				{filteredProducts.slice(0, 10).map((product) => {
					const isProductInCart = checkProductInCart(product);

					return (
						<li key={product.id}>
							<img src={product.thumbnail} alt={product.title} />
							<div>
								<strong>
									{product.title} - ${product.price}
								</strong>
							</div>
							<div>
								<button
									style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
									onClick={() =>
										isProductInCart
											? removeFromCart(product)
											: addToCart(product)
									}
								>
									{isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
