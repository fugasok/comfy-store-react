import { InputField, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		const response = await customFetch.post('/auth/local/register', data);
		toast.success('account created successfully');
		return redirect('/login');
	} catch (error) {
		const errorMessage =
			error?.response?.data?.error?.message ||
			'please check your credentials';
		toast.error(errorMessage);
		return null;
	}
};

const Register = () => {
	return (
		<section className='h-screen grid place-items-center'>
			<Form
				method='POST'
				className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
			>
				<h4 className='text-center text-3xl font-bold'>Register</h4>
				<InputField type='text' label='Username' name='username' />
				<InputField type='email' label='Email' name='email' />
				<InputField type='password' label='Password' name='password' />
				<div className='mt-4'>
					<SubmitBtn text='Register' />
					<p className='text-center'>
						Already a member?{' '}
						<Link
							to='/login'
							className='ml-2 link link-hover link-primary capitalize'
						>
							Login
						</Link>
					</p>
				</div>
			</Form>
		</section>
	);
};
export default Register;
