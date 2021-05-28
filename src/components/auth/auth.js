import React, {useContext, useEffect, useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { StateContext } from '../../storage/context'
import { isUserLogined } from '../../utils/isUserLogined'
import Login from '../login/login'
import Register from '../register/register'

import useClasses from './classes'
import { Link } from 'react-router-dom'

const Auth = ({open, setOpen}) => {
    const classes = useClasses()
    const [isLogin, setLogin] = useState(true)
    const [state] = useContext(StateContext)

    useEffect( _ => {
        if(open && !isUserLogined(state.user)){
            setOpen(false)
        }
    }, [open])

    const closeHandler = () => {
        setOpen(false)
        // setLogin(true)
    }

    return (
        <Dialog
            className={classes.dialog}
            open={open}
            onClose={closeHandler}
            scroll='paper'
            >
            <DialogTitle className={classes.title}>
                { isLogin ? "Login" : 'Register'}
                <CloseRoundedIcon onClick={closeHandler}/>
            </DialogTitle>
            <DialogContent className={classes.content}>
            {   isUserLogined(state.user) ?
                    isLogin ? 
                        <Login close={closeHandler}/> 
                        :<Register close={closeHandler}/> 
                        : <></>
            }
                    
            </DialogContent>
            <div className={classes.setAuth}>
                <Link to="#" color="primary" onClick={() => setLogin(!isLogin)}>{ !isLogin ? "Login" : 'Register'}</Link>
            </div>
        </Dialog>
    )
}

export default Auth