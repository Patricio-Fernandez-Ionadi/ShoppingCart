/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useId } from "react";
import { ClearCartIcon, CartIcon } from "./";
import "./Cart.css";
import { useCart } from "../hooks";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
	return (
		<li>
			<img src={thumbnail} alt={title} />
			<div>
				<strong>{title}</strong>- ${price}
			</div>

			<footer>
				<small>Qty: {quantity}</small>
				<button onClick={addToCart}>+</button>
			</footer>
		</li>
	);
}

export function Cart() {
	const cartCheckbox = useId();

	const { cart, clearCart, addToCart } = useCart();

	return (
		<>
			<label className="cart-button" htmlFor={cartCheckbox}>
				<CartIcon />
			</label>
			<input type="checkbox" id={cartCheckbox} hidden />

			<aside className="cart">
				<ul>
					{cart.map((e) => (
						<CartItem key={e.id} {...e} addToCart={() => addToCart(e)} />
					))}
				</ul>

				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	);
}
