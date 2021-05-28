import React, {useContext, useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import useClasses from './classes'
import { Typography, Button } from '@material-ui/core'
import { StateContext } from '../../storage/context'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { REMOVE_ITEM, SET_HEADER, SET_ITEM_IN_CART } from '../../storage/types'
import { isUserLogined } from '../../utils/isUserLogined'
import { addToCart, removeItem } from '../../https/cartAPI'
import { CHECKOUT } from '../../router/paths'
import { getImage, getPrice } from '../../utils/convertData'
import { EMPTY_CART } from '../../svg/forProducts'

const Cart = ({open, close, cart}) => {
    const classes = useClasses()
    const history = useHistory()
    const [state, dispatch] = useContext(StateContext)
    const [allPrice, setPrice] = useState(0)

    useEffect( _ => {
        let newPrice = 0
        cart.map(product => {
            newPrice += product.quantity * product.price
        })
        setPrice(newPrice || 0)
    }, [state])

    const changeQuantity = async (type, index )=> {
        const item = cart[index]
        if(type === 'add'){
            item.quantity++
        } else if(type === 'remove' && item.quantity > 1){
            item.quantity--
        } else {
            return
        }
        dispatch({
            type: SET_ITEM_IN_CART,
            payload: {
                index,
                item
            }
        })
        if(isUserLogined(state.user)){
            localStorage.setItem('products', JSON.stringify(cart))
        } else {
            await addToCart({
                productId: item.id,
                quantity: item.quantity
            })
        }
    }
    
    const removeFromCart = async index => {
        const id = cart[index].id
        await dispatch({
            type: REMOVE_ITEM,
            payload: {
                index
            }
        })
        if(isUserLogined(state.user)){
            localStorage.setItem('products', JSON.stringify(cart))
        } else {
            await removeItem({
                productId: id 
            })
        }
    }

    const createOrder = _ => {
        dispatch({
            type: SET_HEADER,
            payload: false
        })
        close()
        history.push(CHECKOUT)
    }

    

    return (
        <Dialog
            className={classes.dialog}
            open={open}
            onClose={close}
            scroll='paper'
            >
            <DialogTitle className={classes.title}>
                Cart
                <CloseRoundedIcon onClick={close}/>
            </DialogTitle>
            <DialogContent className={classes.content}>
                {   state.cart.length > 0 ? 
                    <div className={classes.cart}>
                        <ul className={classes.productsList}>
                            {state.cart.map((product, index) => {
                                return (
                                    <li key={product.id} className='product-item'>
                                        <img src={getImage(product.img)}/>
                                        <Typography className='title'>{product.name}</Typography>
                                        <div className='quantity'>
                                            <div className={product.quantity > 1 ? 'change-count' : 'change-count disabled'} onClick={_ => changeQuantity('remove', index)}>-</div>
                                            <Typography className='quantity-count'>{product.quantity}</Typography>
                                            <div className='change-count' onClick={_ => changeQuantity('add', index)}>+</div>
                                        </div>
                                        <div className='price-block'>
                                            <Typography className='product-price'>{getPrice(product.quantity * product.price)}</Typography>
                                        </div>
                                        <CloseOutlinedIcon className='icon' color='secondary' onClick={_ => removeFromCart(index)} />
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={classes.orderBlock}>
                            <div className='create-order'> 
                                <Typography className='order-price'>{getPrice(allPrice)}</Typography>
                                <Button className='create-order-button' onClick={createOrder}>Create order</Button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='emptyCart'>
                        {EMPTY_CART}
                        <Typography className='title'>Your cart is empty</Typography>
                    </div>
                }
            </DialogContent>
        </Dialog>
    )
}

export default Cart