import { useState } from 'react';
import { ProductsList, ProductsGrid } from '../components';
import { useLoaderData } from 'react-router-dom';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
	const { products } = useLoaderData();
	console.log(products);
	return (
		<>
			<ProductsGrid />
			<ProductsList />
		</>
	);
};
export default ProductsContainer;
