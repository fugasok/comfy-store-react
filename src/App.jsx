import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
	About,
	Cart,
	Checkout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProduct,
} from './pages';

import { ErrorElement } from './components';

//loaders
import { loader as landingLoader } from './pages/Landing';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: landingLoader,
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'product/:id',
				element: <SingleProduct />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
			},
			{
				path: 'orders',
				element: <Orders />,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
	{ path: '/login', element: <Login />, errorElement: <Error /> },
	{ path: '/register', element: <Register />, errorElement: <Error /> },
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default App;
