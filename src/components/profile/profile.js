import { Button, TextField, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { getOrders } from '../../https/orderAPI'

import {StateContext} from '../../storage/context'
import {contactSvg, editSvg, emptyOrders, profileSvg} from '../../svg/profile'
import { getPrice } from '../../utils/convertData'
import useClasses from './classes'

const Profile = _ => {
    const classes = useClasses()
    const [editPersonal, setEditPersonal] = useState(false)
    const [editContacts, setEditContacts] = useState(false)
    const [checked, setChecked] = useState(0)
    const [orders, setOrders] = useState([])
    const [state, dispatch] = useContext(StateContext)

    useEffect( async _ => {
        setOrders(await getOrders())
        console.log(await getOrders())
    }, [])

    return (
        <div className={classes.root}>
            <ul className={classes.btnTabs}>
                <li className={checked === 0 ? 'btn-item checked' : 'btn-item'} onClick={_ => setChecked(0)}>Personal data</li>
                <li className={checked === 1 ? 'btn-item checked' : 'btn-item'} onClick={_ => setChecked(1)}>My orders</li>
            </ul>
            <div className={checked === 0 ? classes.personalData : 'none'} >
                <Typography className='title'>Personal data</Typography>
                <div className='info-block'>
                    <div className='header'>
                        <Typography className='info-title'>{profileSvg} Personal data</Typography>
                        <Button disableRipple className='editBtn'> 
                            {editSvg}
                            Edit
                        </Button>
                    </div>
                    <div className='info-line'>
                        <div className='item'>
                            <Typography className='label'>First name</Typography>
                            {
                                editPersonal ?
                                <TextField value={state.user.firstName}></TextField>:
                                <Typography className='value'>{state.user.firstName}</Typography>
                            }

                        </div>
                        <div className='item'>
                            <Typography className='label'>Last name</Typography>
                            {
                                editPersonal ?
                                <TextField value={state.user.lastName}></TextField>:
                                <Typography className='value'>{state.user.lastName || 'None'}</Typography>
                            }
                            
                        </div>
                    </div>
                </div>
                <div className='info-block'>
                    <div className='header'>
                        <Typography className='info-title'>{contactSvg} Contacts</Typography>
                        <Button disableRipple className='editBtn'> 
                            {editSvg}
                            Edit
                        </Button>
                    </div>
                    <div className='info-line'>
                        <div className='item'>
                            <Typography className='label'>Tel no</Typography>
                            {
                                editContacts ?
                                <TextField value={state.user.phone}></TextField>:
                                <Typography className='value'>{state.user.phone}</Typography>
                            }

                        </div>
                        <div className='item'>
                            <Typography className='label'>Email</Typography>
                            {
                                editContacts ?
                                <TextField value={state.user.email}></TextField>:
                                <Typography className='value'>{state.user.email || 'None'}</Typography>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={checked === 1 ? classes.orderList : 'none'}>
                <Typography className='title'>My orders</Typography>
                {
                    //{"coast":"100000.00","status":"CONFIRMED","id":3,"order_products":[{"id":3,"quantity":1,"createdAt":"2021-05-28T12:47:22.141Z","updatedAt":"2021-05-28T12:47:22.141Z","orderId":3,"productId":2,"product":{"name":"iPhone 1","price":"100000.00","id":2}}]}
                    orders.length ?
                    <ul>
                        {orders.map(item => (
                            <li className='list-item' key={item.id}>
                                <div className='order-info'>
                                    <Typography className='block-title'>{item.updatedAt.split('T')[0]}</Typography>
                                    <Typography className='order-status'>{item.status === 'CONFIRMED' ? 'Waiting for payment' : 'Done'}</Typography>
                                </div>
                                <div className='order-price'>
                                    <Typography className='block-title'>Order summary</Typography>
                                    <Typography className='order-summary'>{getPrice(item.cost)}</Typography>
                                </div>
                                <div className='order-products'>
                                   <Typography className='block-title'>Products</Typography>
                                   <ul>
                                       {item.order_products.map(product => (
                                           <li className='products'>
                                               <Typography className='product-name'>{product.product.name}</Typography>
                                               <Typography className='product-price'>{getPrice(product.product.price)}</Typography>
                                           </li>
                                       ))}
                                   </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                    :
                    <div className={classes.emptyOrder}>
                        {emptyOrders}
                        <Typography className='title'>You haven't made orders yet</Typography>
                    </div>
                }
            </div>
        </div>
    )
}

export default Profile 