import React, {Suspense, useEffect} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'


const AppRouter = ({path, component: Component, isPrivate, redirect, props}) => {
    // const checkIsAuth = () => true
    useEffect(() => {
        console.log(path)
    }, [])
    return (
        <Suspense fallback="Load...">
            <Route 
                path={path} 
                render={ props => (<Component {...props}/>)}
                {...props}    
            />
        </Suspense>
    )
}

const MyRouter = ({routes}) => {
    return (
        <Switch>
            {routes.map((route) => (
                <Suspense fallback="Load..." key={route.path}>
                    <Route 
                        path={route.path} 
                        render={ route => (<Component {...route}/>)}
                        {...route}    
                    />
                </Suspense>
            ))}
        </Switch>
    )
}

export default MyRouter


/*{
                isPrivate && !checkIsAuth() ? (
                    <Redirect to={redirect}/>
                    ): (
                    <Component {...props}/>
            )}
            */