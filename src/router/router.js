import React, {Suspense, useEffect} from 'react'
import { Redirect, Route } from 'react-router'


const AppRouter = ({path, component: Component, isPrivate, redirect, props}) => {
    const checkIsAuth = () => true
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

export default AppRouter


/*{
                isPrivate && !checkIsAuth() ? (
                    <Redirect to={redirect}/>
                    ): (
                    <Component {...props}/>
            )}
            */