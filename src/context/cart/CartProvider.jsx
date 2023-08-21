/* eslint-disable react/prop-types */
import { CartContext } from ".";
import { useCartReducer } from "../../hooks";

export function CartProvider({ children }) {
	const { addToCart, removeFromCart, clearCart, state } = useCartReducer();

	return (
		<CartContext.Provider
			value={{
				cart: state,
				addToCart,
				clearCart,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
