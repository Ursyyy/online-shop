import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import useClasses from './classes'
import { EMAIL } from '../../utils/regexp'

const FogotPassword = (close) => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const classes = useClasses()

    const reset = _ => {
        if(!EMAIL.test(email) || email === ''){
            setError("Please, enter email, it must be like yourname@mail.com")
            return
        }
        setError('')
    }

    return (
        <div className={classes.resetForm}>
            <Typography className='label'>Email</Typography>
            <TextField 
                error={error !== ''} 
                helperText={error}
                className='inputField' 
                type='text' 
                variant="outlined" 
                onChange={e => setEmail(e.target.value)}/>
            <div className='secondary'>
                <Typography className='descr'>Enter the mail that you indicated during registration. A password reset email will be sent to it.</Typography>
            </div>
            <div className={classes.resetBtn}>
                <Button className='btn' onClick={reset} color="primary">
                    Reset
                </Button>
            </div>
        </div>
    )
}

export default FogotPassword