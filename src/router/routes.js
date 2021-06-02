// import {lazy} from 'react'
import {CHECKOUT, CHECKOUT_CREATED, MAIN_PAGE, NOT_FOUND, PRODUCTS_PAGE, PROFILE, RESET_PASSWORD} from './paths'
// import MainPage from '../components/mainPage/mainPage'
import ProductsList from '../components/productsList/productsList'
import Checkout from '../components/checkout/checkout'
import CheckoutIsCreated from '../components/checkoutIsCreated/checkoutIsCreated'
import Profile from '../components/profile/profile'
import ResetPassword from '../components/resetPassword/resetPassword'
import NotFound from '../components/notFound/notFound'
const routes = [
	// {
	// 	path: `${PRODUCTS_PAGE}/:id`,
	// 	component: lazy(() => import('../components/productPage/productPage')),
	// 	exact: false,
	// },
	{
		path: RESET_PASSWORD,
		component: ResetPassword,
		exact: false
	},
	{
		path: PRODUCTS_PAGE,
		component: ProductsList,
		exact: true,
	},
	{
		path: PROFILE,
		component: Profile,
		exact: false,
	},
	{
		path: CHECKOUT,
		component: Checkout,
		exact: false,
	},
	{
		path: CHECKOUT_CREATED,
		component: CheckoutIsCreated,
		exact: false,
	},
	{
		path: MAIN_PAGE,
		component: ProductsList,
		exact: false,	
	},
	{
		path: NOT_FOUND,
		component: NotFound,
		exact: false
	}
	
]

export default routes