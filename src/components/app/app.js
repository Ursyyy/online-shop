import React, {useEffect, Suspense, useContext} from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import useClasses, {Theme} from './classes'
import { Switch } from "react-router-dom"
import Header from '../header/header'
import routes from '../../router/routes'
import AppRouter from '../../router/router'
import { StateContext } from '../../storage/context'
import {getUser} from '../../https/userAPI'
import { SET_CART, SET_USER } from '../../storage/types'

const App = () => {
    const classes = useClasses()
    const [state, dispatch] = useContext(StateContext)
    useEffect(async _ => {
        let userData = {}
        try {
            userData = await getUser()
        } catch (e){
            console.log(e)
            userData.user = {}
            userData.cart = {
                id: -1,
                basket_products: []
            }
        } finally {
            dispatch({
                type: SET_USER,
                payload: userData.user
            })
            dispatch({
                type: SET_CART,
                payload: {
                    id: userData.cart.id,
                    products: userData.cart.basket_products
                }
            })
        }
    },[])

    return (
        <ThemeProvider theme={Theme}>
            <Header/>
            <div className={classes.body}>
                <Suspense fallback="Cargando...">
                    <Switch>
                    {routes.map(route => (
                        <AppRouter
                        key={route.path}
                        path={route.path}
                        component={route.component}
                        isPrivate={route.isPrivate}
                        />
                    ))}
                    </Switch>
                </Suspense>
            </div>
        </ThemeProvider>
    )
}
 
export default App