import {lazy} from 'react'
import {CHECKOUT, CHECKOUT_CREATED, MAIN_PAGE, PRODUCTS_PAGE} from './paths'
import MainPage from '../components/mainPage/mainPage'
import ProductsList from '../components/productsList/productsList'
import Checkout from '../components/checkout/checkout'
import CheckoutIsCreated from '../components/checkoutIsCreated/checkoutIsCreated'
const routes = [
	{
		path: `${PRODUCTS_PAGE}/:id`,
		component: lazy(() => import('../components/productPage/productPage')),
		exact: false,
		isPrivate: false,
	},
	{
		path: PRODUCTS_PAGE,
		component: ProductsList,
		exact: true,
		isPrivate: false,
	},
	{
		path: CHECKOUT,
		component: Checkout,
		exact: false,
		isPrivate: false
	},
	{
		path: CHECKOUT_CREATED,
		component: CheckoutIsCreated,
		exact: false,
		isPrivate: true
	},
	{
		path: MAIN_PAGE,
		component: ProductsList,
		exact: false,
		isPrivate: false
	},
	
]

export default routes