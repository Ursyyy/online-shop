import React, {useState, useContext, useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { Button, Badge } from '@material-ui/core'

import useClasses from './classes'
import Auth from '../auth/auth'
import Cart from '../cart/cart'
import { StateContext } from '../../storage/context'
import { isUserLogined } from '../../utils/isUserLogined'
import { profileSvg } from '../../svg/profile'
import Categories from '../categories/categories'
import { useHistory } from 'react-router'
import { MAIN_PAGE, PROFILE } from '../../router/paths'

const Header = () => {
	const classes = useClasses()
	const history = useHistory()
	const [openAuth, setAuth] = useState(false)
	const [openCart, setCart] = useState(false)
	const [openCategory, setOpenCategory] = useState(false)
	const [state] = useContext(StateContext)
	
	const profilePress = _ => {
		if(!isUserLogined(state.user)){
			history.push(PROFILE)
		} else {
			setAuth(true)
		}
	}

	return (
		<>
			{
				state.isHeaderOpen ? 
				<>
					<AppBar 
						className={classes.bar} 
						position="static">
						<Toolbar>
							<MenuRoundedIcon className='menuButton'/>
							<Typography variant="h5" className='title' onClick={_ => history.push(MAIN_PAGE)}>
								Online shop
							</Typography>
							<Button className={classes.catalogBtn} onClick={_ => setOpenCategory(true)}> 
								<svg 
									className='icon'
									height="512" 
									viewBox="0 0 512 512"
									width="512">
										<g>
											<path d="m174 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"/>
											<path d="m446 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"/>
											<path d="m392 512c-66.168 0-120-53.832-120-120s53.832-120 120-120 120 53.832 120 120-53.832 120-120 120zm0-208c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z"/>
											<path d="m174 512h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"/>
										</g>
									</svg>
								Catalog
							</Button>
							<div className={classes.btnGroup}>
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<SearchIcon />
									</div>
									<InputBase
										placeholder="Search…"
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
										inputProps={{ 'aria-label': 'search' }}
									/>
								</div>
								<Tooltip title="Cart" aria-label="cart">
									<Badge badgeContent={state.cart.length} color="secondary">
										<svg onClick={() => setCart(true)} className='svg' height="475pt" viewBox="-16 0 475 475.40008" width="475pt" xmlns="http://www.w3.org/2000/svg">
											<path d="m149.5 373.800781c-28.054688 0-50.800781 22.742188-50.800781 50.800781 0 28.054688 22.746093 50.796876 50.800781 50.796876s50.800781-22.742188 50.800781-50.796876c-.039062-28.042968-22.761719-50.761718-50.800781-50.800781zm0 0"/>
											<path d="m363.398438 373.800781c-28.054688 0-50.796876 22.742188-50.796876 50.800781 0 28.054688 22.742188 50.796876 50.796876 50.796876 28.058593 0 50.800781-22.742188 50.800781-50.796876-.039063-28.042968-22.757813-50.761718-50.800781-50.800781zm0 0"/>
											<path d="m440.5 97.699219c-1.886719-2.582031-4.898438-4.109375-8.101562-4.097657h-338.597657l-7.402343-43.601562c-4.855469-28.898438-29.894532-50.046875-59.199219-50h-17c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h17c19.527343-.078125 36.222656 14.035156 39.402343 33.300781l40.097657 236.300781c4.855469 28.894532 29.898437 50.046876 59.199219 50h228.203124c5.519532 0 10-4.480468 10-10 0-5.523437-4.480468-10-10-10h-228.101562c-19.527344.074219-36.222656-14.035156-39.398438-33.300781l-3.300781-19.199219h224.097657c26.214843.054688 49.40625-16.972656 57.203124-42l37.296876-118.5c.972656-3.023437.453124-6.324218-1.398438-8.902343zm0 0"/>
										</svg>
									</Badge>
								</Tooltip>
								<Tooltip title='Profile' aria-label="profile">
									<div onClick={profilePress} className='svg'>
										{profileSvg}
									</div>
								</Tooltip>	
							</div>
						</Toolbar>
					</AppBar>
					<Auth open={openAuth} setOpen={param => setAuth(param)}/>
					<Cart open={openCart} close={() => setCart(false)} cart={state.cart}/>
					<Categories open={openCategory} close={_ => setOpenCategory(false)}/>
				</>:
				<></>
			}
		</>
	)
}

export default Header