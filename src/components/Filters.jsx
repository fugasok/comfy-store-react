import { Form, useLoaderData, Link } from 'react-router-dom';
import { InputField, SelectField, RangeField, CheckboxField } from './';

const Filters = () => {
	const { meta } = useLoaderData();
	return (
		<Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
			{/* Search */}
			<InputField
				type='search'
				label='search product'
				name='search'
				size='input-sm'
			/>
			{/* Catetories */}
			<SelectField
				label='select category'
				name='category'
				list={meta.categories}
				size='select-sm'
			/>
			{/* Companies */}
			<SelectField
				label='select company'
				name='company'
				list={meta.companies}
				size='select-sm'
			/>
			{/* Order */}
			<SelectField
				label='sort by'
				name='order'
				list={['a-z', 'z-a', 'high', 'low']}
				size='select-sm'
			/>
			{/* Price Range */}
			<RangeField name='price' label='select price' size='range-sm' />
			{/* Shipping */}
			<CheckboxField
				name='shipping'
				label='free shipping'
				size='checkbox-sm'
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
