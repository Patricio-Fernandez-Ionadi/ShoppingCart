/* eslint-disable no-unused-vars */
import { Cart, Footer, Header, Products } from "./components";
import { CartProvider } from "./context";

function App() {
	return (
		<CartProvider>
			<h1>Shopping Cart 🛒</h1>
			<Header />
			<Cart />
			<Products />
			<Footer />
		</CartProvider>
	);
}

export default App;
