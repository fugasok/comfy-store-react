import { InputField, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

const Login = () => {
	return (
		<section className='grid place-items-center h-screen px-8'>
			<Form
				method='post'
				className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
			>
				<h4 className='text-center text-3xl font-bold'>Login</h4>
				<InputField
					label='Email'
					type='email'
					name='identifier'
					defaultValue={'test@test.com'}
					placeholder={'test@test.com'}
				/>
				<InputField
					label='Password'
					type='password'
					name='password'
					defaultValue='secret'
				/>
				<div className='mt-4'>
					<SubmitBtn text='Login' />
				</div>
				<button type='button' className='btn btn-secondary btn-block'>
					guest user
				</button>
				<p className='text-center'>
					Not a member yet?{' '}
					<Link
						to='/register'
						className='ml-2 link lunk-hover link-primary capitalize'
					>
						Register
					</Link>
				</p>
			</Form>
		</section>
	);
};
export default Login;
