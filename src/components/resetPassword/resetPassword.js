import React, { useEffect, useState } from 'react'
import useClasses from './classes'

const ResetPassword = _ => {

    const classes = useClasses()
    const [token, setToken] = useState('')
    const [passwd, setPasswd] = useState('')
    const [confirm, srtConfirm] = useState('')

    useEffect(_ => {
        const emailToken = window.location.pathname.split('/').reverse()[0]
        setToken(emailToken)
    },[])

    return (
        <div className={classes.root}>
            <div>

            </div>
        </div>
    )
}

export default ResetPassword