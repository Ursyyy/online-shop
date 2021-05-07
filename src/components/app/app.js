import React from 'react'
import useClasses from './classes'

import Login from '../login/login'

const App = () => {
    const classes = useClasses()
    return (
        <div className={classes.class}>
            Hey
            <Login/>
        </div>
    )
}
 
export default App