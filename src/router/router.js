import React, {Suspense} from 'react'
import { Redirect, Route} from 'react-router-dom'


const AppRouter = ({path, component: Component, isPrivate, redirect, props}) => {
    // const checkIsAuth = () => true
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