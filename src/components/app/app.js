import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import useClasses, {Theme} from './classes'

import Header from '../header/header'
import MainPage from '../mainPage/mainPage'
import Cart from '../cart/cart'

const App = () => {
    const classes = useClasses()
    return (
        <ThemeProvider theme={Theme}>
            <Header/>
            <MainPage />
            {/* <Cart/> */}
        </ThemeProvider>
    )
}
 
export default App