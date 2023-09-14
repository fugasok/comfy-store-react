import { Link, useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';
import { useState } from 'react';

export const loader = async ({ params }) => {
	const response = await customFetch(`/products/${params.id}`);
	console.log(response);
	return { product: response.data.data };
};

const SingleProduct = () => {
	const { product } = useLoaderData();
	const { image, title, price, description, colors, company } =
		product.attributes;
    const dollarsAmount = formatPrice(price);
	return <div>SingleProduct</div>;
};
export default SingleProduct;
