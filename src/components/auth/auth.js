import React, {useContext, useState} from 'react'
import { StateContext } from '../../storage/context'
import { isUserLogined } from '../../utils/isUserLogined'
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
            {   isUserLogined(state.user) ?
                    isLogin ? 
                        <Login open={open && isLogin} close={closeHandler} changeAuth={() => setLogin(!isLogin)}/> 
                        :<Register open={open && !isLogin} close={closeHandler} changeAuth={() => setLogin(!isLogin)}/> 
                        : <></>
            }
        </>
    )
}

export default Auth