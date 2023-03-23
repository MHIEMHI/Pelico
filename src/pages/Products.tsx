import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../api/productApi';
import { Product } from '../types/product';
import { ProductDetail } from './ProductDetail';

interface IProductsProps
{

}


export const Products: React.FC<IProductsProps> = (props) =>
{
	const [products, setProducts] = useState<Product[]>([]);
	const navigate = useNavigate();
	useEffect(() =>
	{
		getProducts().then(data =>
		{
			setProducts(data);

		});
	}, []);
	useEffect(() =>
	{
		console.log('products', products);
	}, [products]);

	return (
		<div>
			<button onClick={() => navigate('/cart')}>Go To Cart</button>
			{
				products.map(product =>
					<div key={product._id}>
						<ProductDetail product={product} />
					</div>)
			}
		</div>
	);
};
