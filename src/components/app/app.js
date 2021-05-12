import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import useClasses, {Theme} from './classes'

import Login from '../login/login'
import Header from '../header/header'
import MainPage from '../mainPage/mainPage'

const App = () => {
    const classes = useClasses()
    return (
        <ThemeProvider theme={Theme}>
            {/* <Header/>
            <MainPage /> */}
            <Login />
        </ThemeProvider>
    )
}
 
export default App