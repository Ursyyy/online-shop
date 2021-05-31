import { Typography } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { CHECKOUT, MAIN_PAGE } from '../../router/paths'
import { StateContext } from '../../storage/context'
import { SET_HEADER } from '../../storage/types'
import { SUCCESS } from '../../svg/checkoutCreated'
import useClasses from './classes'

const CheckoutIsCreated = _ => {
    const classes = useClasses()
    const history = useHistory()
    const [state, dispatch] = useContext(StateContext)
    useEffect(async _ => {
        if(history.location.state !== CHECKOUT){
            history.push(MAIN_PAGE)
        }
        await dispatch({
            type: SET_HEADER,
            payload: false
        })
        setTimeout(_ => {
            history.go(-2)
        }, 2500)
    },[])

    useEffect( _ => {
        return _ => {
            dispatch({
                type: SET_HEADER,
                payload: true
            })
        }
    }, [])

    return (
        <div className={classes.root}>
            <div className='block'>
                {SUCCESS}
                <Typography className='description'>Your order has been created</Typography>
            </div>
        </div>
    )
}

export default CheckoutIsCreated