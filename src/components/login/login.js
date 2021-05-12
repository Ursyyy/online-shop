import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogTitle from '@material-ui/core/DialogTitle'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import useClasses from './classes'
import { Typography } from '@material-ui/core'

const Login = () => {
    const classes = useClasses()
    const [open, setOpen] = useState(true)

    const handleClose = () => {
    }
    return (
        <div className={classes.dialog}>
            <Dialog
                className={classes.dialog}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle className={classes.title}>
                    Log in
                    <CloseRoundedIcon/>
                </DialogTitle>
                <DialogContent className={classes.content}>
                    <Typography className='label'>Email</Typography>
                    <TextField type='text' id="outlined-basic" variant="outlined" />
                    <Typography className='label'>Password</Typography>
                    <TextField type="password" variant="outlined" />
                </DialogContent>
                <DialogActions className='loginBtn'>
                    <Button onClick={handleClose} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Login