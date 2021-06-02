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
import FogotPassword from '../fogotPassword/fogotPassword'

const Auth = ({open, setOpen}) => {
    const classes = useClasses()
    const [dialogForm, setDialog] = useState('login')
    const [state] = useContext(StateContext)

    useEffect( _ => {
        if(open && !isUserLogined(state.user)){
            setOpen(false)
        }
    }, [open])

    const closeHandler = () => {
        setDialog('login')
        setOpen(false)
    }

    return (
        <Dialog
            className={classes.dialog}
            open={open}
            onClose={closeHandler}
            scroll='paper'
            >
            <DialogTitle className={classes.title}>
                { dialogForm === 'login' ? "Login" : dialogForm === 'register' ? 'Register' : 'Reset password'}
                <CloseRoundedIcon onClick={closeHandler}/>
            </DialogTitle>
            <DialogContent className={classes.content}>
            {   isUserLogined(state.user) ?
                    (() => {
                        if(dialogForm === 'login'){
                            return (
                                <Login close={closeHandler} fogotPass={_ => setDialog('fogot')}/> 
                            )
                        } else if(dialogForm === 'register'){
                            return (
                                <Register close={closeHandler}/>
                            )
                        } else {
                            return (
                                <FogotPassword />
                            )
                        }
                    })()
                        : <></>
            }
                    
            </DialogContent>
            {
                dialogForm !== 'fogot' ? 
                <div className={classes.setAuth}>
                    <Link to="#" color="primary" onClick={() => setDialog(dialogForm === 'login' ? 'register' : 'login')}>{ dialogForm === 'login' ? "Login" : 'Register'}</Link>
                </div> :
                <></>
            }
        </Dialog>
    )
}

export default Auth