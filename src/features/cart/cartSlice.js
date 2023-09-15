import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
};

const getCartFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice({
	name: 'cart',
	// initialState: defaultState,
	initialState: getCartFromLocalStorage(),
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;
			const item = state.cartItems.find((i) => i.cartID === product.cartID);
			if (item) {
				item.amount += product.amount;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart += product.amount;
			state.cartTotal += product.price * product.amount;

			// Call this reducer inside another reducer
			cartSlice.caseReducers.calculateTotals(state);
			toast.success('Item added to cart');
		},
		clearCart: (state) => {
			localStorage.setItem('cart', JSON.stringify(defaultState));
			return defaultState;
		},
		removeItem: (state, action) => {
			const { cartID } = action.payload;
			const product = state.cartItems.find((i) => i.cartID === cartID);
			state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

			state.numItemsInCart -= product.amount;
			state.cartTotal -= product.price * product.amount;
			// Call this reducer inside another reducer
			cartSlice.caseReducers.calculateTotals(state);
			toast.success('Item removed from cart');
		},
		editItem: (state, action) => {
			const { cartID, amount } = action.payload;
			const item = state.cartItems.find((i) => i.cartID === cartID);

			// The logic here is to update the total number of items in the cart (state.numItemsInCart) by adjusting it based on the difference between the provided amount and the existing quantity of that item (item.amount). If amount is greater than item.amount, it means that items are being added to the cart. If amount is less than item.amount, it means that items are being removed from the cart. If they are equal, it implies no change to the quantity of that item in the cart.

			// The result of the subtraction (amount - item.amount) is then added to the current state.numItemsInCart to reflect the new total number of items in the cart.
			state.numItemsInCart += amount - item.amount;
			state.cartTotal += item.price * (amount - item.amount);
			item.amount = amount;
			// Call this reducer inside another reducer
			cartSlice.caseReducers.calculateTotals(state);
			toast.success('Cart updated');
		},

		// use this reducer in other reducers
		calculateTotals: (state) => {
			state.tax = 0.2 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;
			localStorage.setItem('cart', JSON.stringify(state));
		},
	},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
