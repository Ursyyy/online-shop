import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import useClasses, {Theme} from './classes'

// import Login from '../login/login'
import Header from '../header/header'

const App = () => {
    const classes = useClasses()
    return (
        <ThemeProvider theme={Theme}>
            <div className={classes.body}>
                <Header/>
            </div>
        </ThemeProvider>
    )
}
 
export default App