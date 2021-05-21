import React, {useContext, useState} from 'react'
import { StateContext } from '../../storage/context'
import Login from '../login/login'
import Register from '../register/register'

const Auth = ({open, setOpen}) => {
    const [isLogin, setLogin] = useState(true)
    const [state] = useContext(StateContext)

    const closeHandler = () => {
        setOpen(false)
        setLogin(true)
    }

    return (
        <>
            {   Object.keys(state.user).length === 0 && state.user.constructor === Object ?
                    isLogin ? 
                        <Login open={open && isLogin} close={closeHandler} changeAuth={() => setLogin(!isLogin)}/> 
                        :<Register open={open && !isLogin} close={closeHandler} changeAuth={() => setLogin(!isLogin)}/> 
                        : <></>
            }
        </>
    )
}

export default Auth