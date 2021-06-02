import { Button, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useClasses from './classes'

const ResetPassword = _ => {

    const classes = useClasses()
    const [token, setToken] = useState('')
    const [passwd, setPasswd] = useState('')
    const [confirm, setConfirm] = useState('')
    const [errorPass, setErrorPass] = useState('') 
    const [errorConf, setErrorConf] = useState('')

    useEffect(_ => {
        const emailToken = window.location.pathname.split('/').reverse()[0]
        setToken(emailToken)
    },[])

    const reset = async _ => {
        if(passwd === ''){
            setErrorPass("Please enter new password")
            return
        }
        if(passwd.length < 6){
            setErrorPass('Password must be at least 6 chars long')
            return
        }
        setErrorPass('')
        if(confirm === ''){
            setErrorConf('Confirm your password')
            return
        }
        if(passwd !== confirm){
            setErrorConf('Password mismatch')
            return
        }
        setErrorConf('')

    }

    return (
        <div className={classes.root}>
            <div className={classes.resetForm}>
                <Typography className='label'>New password</Typography>
                <TextField 
                    error={errorPass !== ''} 
                    helperText={errorPass}
                    className='inputField' 
                    type="password" 
                    variant="outlined" 
                    onChange={e => setPasswd(e.target.value)}/>
                <Typography className='label'>Confirm password</Typography>
                <TextField 
                    error={errorConf !== ''} 
                    helperText={errorConf}
                    className='inputField' 
                    type="password" 
                    variant="outlined" 
                    onChange={e => setConfirm(e.target.value)}/>
                
                <div className='secondary'>
                    <Typography className='descr'>The password must be at least 6 characters long, contain numbers and Latin letters.</Typography>
                </div>
                <div className={classes.button}>
                    <Button className='reset-btn' onClick={reset}>Reset</Button>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword