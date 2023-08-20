/* eslint-disable react/prop-types */
import { useState } from "react";
import { CartContext } from ".";

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		const productInCartIndex = cart.findIndex((p) => p.id === product.id);

		if (productInCartIndex >= 0) {
			const newCart = structuredClone(cart);
			newCart[productInCartIndex].quantity += 1;
			return setCart(newCart);
		}

		// El producto no eta en el carrito
		setCart((prev) => [
			...prev,
			{
				...product,
				quantity: 1,
			},
		]);
	};

	const removeFromCart = (product) => {
		setCart((prev) => prev.filter((p) => p.id !== product.id));
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				clearCart,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
