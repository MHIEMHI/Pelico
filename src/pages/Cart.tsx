import React from 'react';
import { useShoppingCart } from '../context/ShoppingContext';

export const Cart = () =>
{
	const { cartItems } = useShoppingCart();

	return (<>
		<div>Cart</div>
		<div>
			{
			cartItems.map((cartItem) =>
				<div key={cartItem.id}>{cartItem.id} <span>{cartItem.quantity}</span></div>
			)
		}
		</div>
	</>
	);
};
