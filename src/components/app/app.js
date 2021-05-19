import React, {useEffect} from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import useClasses, {Theme} from './classes'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Header from '../header/header'
import routes from '../../router/routes'
import AppRouter from '../../router/router'

const App = () => {
    const classes = useClasses()
    useEffect(() => {
        console.log(routes)
    },[])
    return (
        <ThemeProvider theme={Theme}>
            <Router>
                <Header/>
                <Switch>
                    { routes.map(route => (
                        <AppRouter 
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            isPrivate={route.isPrivate}
                            />
                    ))}
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
 
export default App