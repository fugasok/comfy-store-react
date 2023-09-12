import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
	return (
		<>
			<nav>
				<span className='text4-xl text-primary'>Comfy</span>
			</nav>
			<Outlet />
		</>
	);
};
export default HomeLayout
