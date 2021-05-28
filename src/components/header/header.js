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
import { SET_USER } from '../../storage/types'

const Header = () => {
	const classes = useClasses()
	const [openAuth, setAuth] = useState(false)
	const [openCart, setCart] = useState(false)
	const [profileLabel, setLabel] = useState('Logout')
	const [state, dispatch] = useContext(StateContext)

	useEffect( _ => {
		setLabel(!isUserLogined(state.user) ? "Logout": 'Profile')
	}, [])
	
	const profilePress = _ => {
		if(!isUserLogined(state.user)){
			dispatch({
				type: SET_USER,
				payload: {}
			})
			localStorage.removeItem('token')
			setLabel("Profile")
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
							<Typography variant="h5" className='title'>
								Online shop
							</Typography>
							<Button className={classes.catalogBtn}> 
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
								<Tooltip title={profileLabel} aria-label="profile">
									<svg onClick={profilePress} className='svg' viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg">
										<path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"/>
										<path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"/>
									</svg>	
								</Tooltip>	
							</div>
						</Toolbar>
					</AppBar>
					<Auth open={openAuth} setOpen={param => setAuth(param)}/>
					<Cart open={openCart} close={() => setCart(false)} cart={state.cart}/>
				</>:
				<></>
			}
		</>
	)
}

export default Header