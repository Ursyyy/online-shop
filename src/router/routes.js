import MainPage from '../components/mainPage/mainPage'
import ProductPage from '../components/productPage/productPage'
import ProductsList from '../components/productsList/productsList'
import {MAIN_PAGE, PRODUCT_PAGE} from './paths'

const routes = [
	{
		path: MAIN_PAGE,
		component: MainPage,
		exact: true,
		isPrivate: false
	},
	{
		path: PRODUCT_PAGE,
		component: ProductsList,
		exact: false,
		isPrivate: false,
		routes: [
			{
				path: `${PRODUCT_PAGE}/:id`,
				component: ProductPage,
				exact: false,
				isPrivate: false,
			}
		]
	},
]

export default routes