import React, {useEffect, Suspense} from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import useClasses, {Theme} from './classes'
import { Switch } from "react-router-dom"
import Header from '../header/header'
import routes from '../../router/routes'
import AppRouter from '../../router/router'
import MainPage from '../mainPage/mainPage'
// import ProductPage from '../productPage/productPage'
import ProductsList from '../productsList/productsList'

const App = () => {
    const classes = useClasses()
    useEffect(() => {
        console.log(routes)
    },[])
    return (
        <ThemeProvider theme={Theme}>
            <Header/>
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
        </ThemeProvider>
    )
}
 
export default App