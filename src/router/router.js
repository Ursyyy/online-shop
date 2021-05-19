import React from 'react'
import { Redirect, Route } from 'react-router'


const AppRouter = ({path, component: Component, isPrivate, redirect, props}) => {
    const checkIsAuth = () => true
    return (
        <Route 
            path={path} 
            render={ props => {
                isPrivate && !checkIsAuth() ? (
                    <Redirect to={redirect}/>
                    ): (
                    <Component {...props}/>
            )}
                }
            {...props}    
        />
    )
}

export default AppRouter