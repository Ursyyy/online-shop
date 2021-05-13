import React, {useState} from 'react'
import Login from '../login/login'
import Register from '../register/register'

const Auth = ({open, setOpen}) => {
    const [isLogin, setLogin] = useState(true)

    const closeHandler = () => {
        setOpen(false)
        setLogin(true)
    }

    return (
        <>
            { isLogin ? 
                <Login open={open && isLogin} close={closeHandler} changeAuth={() => setLogin(!isLogin)}/> 
                :<Register open={open && !isLogin} close={closeHandler} changeAuth={() => setLogin(!isLogin)}/> 
            }
        </>
    )
}

export default Auth