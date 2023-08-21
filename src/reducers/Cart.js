export const cartInitialState = [];

export const CART_ACTION_TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_CART: 'CLEAR_CART'
} 

export const cartReducer = (state, action) => {

	switch (action.type) {
		
		case CART_ACTION_TYPES.ADD_TO_CART: {
			const { id } = action.payload;
			const productInCartIndex = state.findIndex((p) => p.id === id);

			if (productInCartIndex >= 0) {

				// ------ USANDO STRUCTUREDCLONE ------
				const newState = structuredClone(state);
				newState[productInCartIndex].quantity += 1;


				// ------ USANDO MAP ------
				// const newState = state.map(e => {
				// 	if (e.id === id){
				// 		return {
				// 			...e,
				// 			quantity: e.quantity + 1
				// 		}
				// 	}
				// 	return e
				// })

				// ------ USANDO SPREAD OP Y SLICE ------
				// (verlo bien not working)
				// const newState = [
				// 	...state.slice[0, productInCartIndex],
				// 	{...state[productInCartIndex], quantity : state[productInCartIndex].quantity + 1},
				// 	...state.slice(productInCartIndex + 1)
				// ]


				return newState;
			}

			return [
				...state,
				{
					...action.payload,
					quantity: 1,
				},
			];
		}

		case CART_ACTION_TYPES.REMOVE_FROM_CART: {
			const { id } = action.payload;

			return state.filter((p) => p.id !== id);
		}

		case CART_ACTION_TYPES.CLEAR_CART: {
			return cartInitialState;
		}
	}

	return state;
};

