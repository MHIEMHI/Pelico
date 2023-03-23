import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';

interface IProductsProps{
	product: Product
}


export const ProductDetail : React.FC<IProductsProps>  = ({product}) =>
{
	return (
		<Link to={product._id}>{product.title}</Link>
	);
};
