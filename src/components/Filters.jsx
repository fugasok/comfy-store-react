import { Form, useLoaderData, Link } from 'react-router-dom';
import { InputField, SelectField, RangeField, CheckboxField } from './';

const Filters = () => {
	const { meta, params } = useLoaderData();
	const { search, company, category, shipping, order, price } = params;
	return (
		<Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
			{/* Search */}
			<InputField
				type='search'
				label='search product'
				name='search'
				size='input-sm'
				defaultValue={search}
			/>
			{/* Catetories */}
			<SelectField
				label='select category'
				name='category'
				list={meta.categories}
				size='select-sm'
				defaultValue={category}
			/>
			{/* Companies */}
			<SelectField
				label='select company'
				name='company'
				list={meta.companies}
				size='select-sm'
				defaultValue={company}
			/>
			{/* Order */}
			<SelectField
				label='sort by'
				name='order'
				list={['a-z', 'z-a', 'high', 'low']}
				size='select-sm'
				defaultValue={order}
			/>
			{/* Price Range */}
			<RangeField
				name='price'
				label='select price'
				size='range-sm'
				price={price}
			/>
			{/* Shipping */}
			<CheckboxField
				name='shipping'
				label='free shipping'
				size='checkbox-sm'
				defaultValue={shipping}
			/>
			{/* Buttons */}
			<button type='submit' className='btn btn-primary btn-sm'>
				Search
			</button>
			<Link to='/products' className='btn btn-accent btn-sm'>
				Reset
			</Link>
		</Form>
	);
};
export default Filters;
