import React, {useEffect} from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import useClasses, {Theme} from './classes'
import {Route, Switch} from 'react-router'
import Header from '../header/header'
import routes from '../../router/routes'
import MyRouter from '../../router/router'
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
            <MyRouter routes={routes}/>
        </ThemeProvider>
    )
}
 
export default App