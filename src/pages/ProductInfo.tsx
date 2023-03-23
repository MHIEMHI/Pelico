import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingContext';

export const ProductInfo = () =>
{

	const { productId } = useParams();
	const navigate = useNavigate();
	const { increaseCartItemQuantity, getItemQuantity } = useShoppingCart();



	return (productId ? <>
		<div>{productId}</div>
		<div>{getItemQuantity(productId)}</div>
		<button onClick={() => increaseCartItemQuantity(productId)}>Add Quantity </button>
		<button onClick={() => navigate(-1)}>Go back </button>
	</> : <>Not Found</>
	);
};
