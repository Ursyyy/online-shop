import {lazy} from 'react'
import {MAIN_PAGE, PRODUCTS_PAGE} from './paths'
import MainPage from '../components/mainPage/mainPage'
import ProductsList from '../components/productsList/productsList'
const routes = [
	
	{
		path: PRODUCTS_PAGE,
		component: ProductsList,
		exact: false,
		isPrivate: false,
		routes: [
			{
				path: `${PRODUCTS_PAGE}/:id`,
				component: lazy(() => import('../components/productPage/productPage')),
				exact: false,
				isPrivate: false,
			}
		]
	},
	{
		path: MAIN_PAGE,
		component: MainPage,
		exact: false,
		isPrivate: false
	},
]

export default routes