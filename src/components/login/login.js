import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogTitle from '@material-ui/core/DialogTitle'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import useClasses from './classes'
import { Typography, Link } from '@material-ui/core'

const Login = ({open, close, changeAuth}) => {
    const classes = useClasses()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    return (
        <Dialog
            className={classes.dialog}
            open={open}
            onClose={close}
            >
            <DialogTitle className={classes.title}>
                Log in
                <CloseRoundedIcon onClick={close}/>
            </DialogTitle>
            <DialogContent className={classes.content}>
                <div className={classes.loginForm}>
                    <Typography className='label'>Email or tel.number</Typography>
                    <TextField className='inputField' type='text' variant="outlined" />
                    <Typography className='label'>Password</Typography>
                    <TextField className='inputField' type="password" variant="outlined" />
                    <div className='secondary'>
                        <Link to="#" color="primary">Fogot password?</Link>
                    </div>
                    <DialogActions>
                        <Button className={classes.loginBtn} onClick={close} color="primary">
                            Login
                        </Button>
                    </DialogActions>
                    <div className={classes.register}>
                        <Link to="#" color="primary" onClick={changeAuth}>Register</Link>
                    </div>
                </div>
                <div className='servicesBtn'>
                    <Typography className='label'>Login with</Typography>
                    <Button className='connectBtn' color="primary">
                        <svg 
                            height="512" 
                            viewBox="0 0 24 24" 
                            width="512" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-6.932 0-5.046 7.85-5.322 9h-3.487v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877c.188-2.824-.761-5.016 2.051-5.016z" fill="#3b5999"/>
                        </svg>
                        Facebook
                    </Button>
                    <Button className='connectBtn' color="primary">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" space="preserve">
                            <path fill="#FBBB00" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                                c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                                C103.821,274.792,107.225,292.797,113.47,309.408z"/>
                            <path fill="#518EF8" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                                c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                                c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"/>
                            <path fill="#28B446" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                                c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                                c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"/>
                            <path fill="#F14336" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                                c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                                C318.115,0,375.068,22.126,419.404,58.936z"/>
                        </svg>
                        Google
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Login