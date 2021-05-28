import React, { useContext, useEffect, useState } from 'react'
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom"
import { StateContext } from '../../storage/context'
import { SET_CART, SET_HEADER } from '../../storage/types'

import useClasses from './classes'
import { isUserLogined } from '../../utils/isUserLogined'
import { CHECKOUT, CHECKOUT_CREATED, MAIN_PAGE, PRODUCTS_PAGE } from '../../router/paths'
import { getImage, getPrice } from '../../utils/convertData'
import Auth from '../auth/auth'
import { createOrder } from '../../https/orderAPI'

const Checkout = _ => {
    const history = useHistory()
    const [state, dispatch] = useContext(StateContext)
    const [resultPrice, setResultPrice] = useState(0)
    const [delivery, setDelivery] = useState(0)
    const [payment, setPayment] = useState(0)
    const [isLogined, setIsLogined] = useState(false)
    const classes = useClasses()

    useEffect(async _ => {
        await dispatch({
            type: SET_HEADER,
            payload: false
        })
        if(state.cart.length === 0){
            history.push(MAIN_PAGE)
        }
        setIsLogined(isUserLogined(state.user))
        let price = 0
        for(let item of state.cart){
            price += item.price * item.quantity
        }
        setResultPrice(price)
        
    }, [])

    useEffect( _ => {
        if(isLogined && !isUserLogined(state.user)){
            setIsLogined(false)
        }
    }, [state.user])
    

    useEffect( _ => {
        return _ => {
            dispatch({
                type: SET_HEADER,
                payload: true
            })
        }
    }, [])

    const createCheckout = async _ => {
        await createOrder()
        await dispatch({
            type: SET_CART,
            payload: []
        })
        history.push({pathname: CHECKOUT_CREATED, state: CHECKOUT })
        
    }

    return (
        <div className={classes.container}>
            <div className={classes.order}>
                <Typography className='title'>Create order</Typography>
                <div className='order-body'>
                    <div>
                        {/* {
                            isUserLogined(state.user) ?
                                <div className='order-login'>
                                    Login
                                </div>
                                :
                                <></>
                        } */}
                        <div className='order-block'>
                            <Typography className='order-title'>Products:</Typography>
                            <ul className='products-list'>
                                { state.cart.map(product => (
                                    <li className='product-list-item' key={product.id}>
                                        <img src={getImage(product.img)}/>
                                        <Typography className='title'>{product.name}</Typography>
                                        <div className='descr-block'>
                                            <Typography className='descr-name'>Price</Typography>
                                            <Typography className='descr-price'>{getPrice(product.price)}</Typography>
                                        </div>
                                        <div className='descr-block'>
                                            <Typography className='descr-name'>Count</Typography>
                                            <Typography className='descr-value'>{product.quantity}</Typography>
                                        </div>
                                        <div className='descr-block'>
                                            <Typography className='descr-name'>Full Price</Typography>
                                            <Typography className='descr-price'>{getPrice(product.quantity * product.price)}</Typography>
                                        </div>
                                    </li>
                                    ))  
                                }
                            </ul>
                        </div>
                        <div className='order-block'>
                            <Typography className='order-title'>Delivery address</Typography>
                            <Typography className='description'>Not necessary</Typography>
                            <FormControl>
                                <RadioGroup value={delivery} onChange={e => setDelivery(+e.target.value)}>
                                    <FormControlLabel className={delivery === 0 ? 'checkbox checked' : 'checkbox'} value={0} control={<Radio color='primary'/>} label='Nova Poshta'/>
                                    <FormControlLabel className={delivery === 1 ? 'checkbox checked' : 'checkbox'} value={1} control={<Radio color='primary'/>} label='Self delivery'/>
                                    <FormControlLabel className={delivery === 2 ? 'checkbox checked' : 'checkbox'} value={2} control={<Radio color='primary'/>} label='Ukr. poshta'/>
                                    <FormControlLabel className={delivery === 3 ? 'checkbox checked' : 'checkbox'} value={3} control={<Radio color='primary'/>} label='Courier'/>
                                </RadioGroup>
                                
                            </FormControl>
                            <div className='input-address'>
                                <div className='address-block'>
                                    <Typography className='input-title'>Street</Typography>
                                    <TextField className='input-field' type="address" variant="outlined"/>
                                </div>
                                <div className='address-block'>
                                    <Typography className='input-title half'>House №</Typography>
                                    <TextField className='input-field half' type="address" variant="outlined"/>
                                </div>
                            </div>
                        </div>
                        <div className='order-block'>
                        <Typography className='order-title'>Payment</Typography>
                        <Typography className='description'>Not necessary</Typography>
                        <FormControl>
                            <RadioGroup value={payment} onChange={e => setPayment(+e.target.value)}>
                                <FormControlLabel className={payment === 0 ? 'checkbox checked' : 'checkbox'} value={0} control={<Radio color='primary'/>} label='Payment upon receipt'/>
                                <FormControlLabel className={payment === 1 ? 'checkbox checked' : 'checkbox'} value={1} control={<Radio color='primary'/>} label='Payment by card'/>
                                {
                                    payment === 1 ?
                                    <div className='input-payment'>
                                        <div className='card-block'>
                                            <Typography className='input-title'>Card No</Typography>
                                            <TextField 
                                                className='input-card' 
                                                type="address" 
                                                variant="outlined" 
                                                placeholder='1234 5678 9012 3456'/>
                                        </div>
                                        <div className='input-support'>
                                            <div className='card-block'>
                                                <Typography className='input-title half'>Expiry date</Typography>
                                                <div style={{display: 'flex'}}>
                                                    <TextField className='input-date' type="address" placeholder="MM" variant="outlined"/>
                                                    <p className='separator'>/</p>
                                                    <TextField className='input-date' type="address" placeholder="YY" variant="outlined"/>
                                                </div>
                                            </div>
                                            <div  className='card-block'>
                                                <Typography className='input-title half'>CVV</Typography>
                                                <TextField className='input-date' type="password" placeholder='123' variant="outlined"/>
                                            </div>
                                        </div>
                                    </div>
                                    : <></>
                                }
                                <FormControlLabel className={payment === 2 ? 'checkbox checked' : 'checkbox'} value={2} control={<Radio color='primary'/>} label='Cashless payment'/>
                                <FormControlLabel className={payment === 3 ? 'checkbox checked' : 'checkbox'} value={3} control={<Radio color='primary'/>} label='Google Pay/ Apple Pay'/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    </div>
                    <div className='order-total'>
                        <Typography className='title'>Total price</Typography>
                        <Typography className='price'>{getPrice(resultPrice)}</Typography>
                        <div className='btn-group'>
                            <Button color='primary' className='create-order-btn' onClick={createCheckout}>Create order</Button>
                            <Link to={PRODUCTS_PAGE} className='cancel-link'>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Auth open={isLogined} setOpen={_ => setIsLogined(isUserLogined(state.user))}/>
        </div>
    )
}

export default Checkout