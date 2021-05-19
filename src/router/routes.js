import {lazy} from 'react'
import {MAIN_PAGE, PRODUCTS_PAGE} from './paths'

const routes = [
	{
		path: MAIN_PAGE,
		component: lazy(() => import('../components/mainPage/mainPage')),
		exact: true,
		isPrivate: false
	},
	{
		path: PRODUCTS_PAGE,
		component: lazy(() => import('../components/productsList/productsList')),
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
]

export default routes