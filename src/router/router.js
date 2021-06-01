import React, {Suspense} from 'react'
import { Route} from 'react-router-dom'


const AppRouter = ({path, component: Component, props}) => {
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