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
                                        <img src={`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/${product.img}`}/>
                                        <Typography className='title'>{product.name}</Typography>
                                        <div className='quantity'>
                                            <div className={product.quantity > 1 ? 'change-count' : 'change-count disabled'} onClick={_ => changeQuantity('remove', index)}>-</div>
                                            <Typography className='quantity-count'>{product.quantity}</Typography>
                                            <div className='change-count' onClick={_ => changeQuantity('add', index)}>+</div>
                                        </div>
                                        <div className='price-block'>
                                            <Typography className='product-price'>{(product.quantity * product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</Typography>
                                        </div>
                                        <CloseOutlinedIcon className='icon' color='secondary' onClick={_ => removeFromCart(index)} />
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={classes.orderBlock}>
                            <div className='create-order'> 
                                <Typography className='order-price'>{allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</Typography>
                                <Button className='create-order-button' onClick={createOrder}>Create order</Button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='emptyCart'>
                        <svg 
                            height="512" 
                            viewBox="0 0 256 256" 
                            width="512" >
                            <path d="m241.4 112.529h-169.956l15.808 86.243h135.738l18.625-86.253c-.073.001-.143.01-.215.01z" fill="#fc3850"/>
                            <path d="m241.4 94.313h-173.295l3.339 18.215h169.956c3.458 0 6.287-2.829 6.287-6.287v-5.641c0-3.457-2.829-6.287-6.287-6.287z" fill="#f9677f"/>
                            <circle cx="186.947" cy="230.924" fill="#2a4a97" r="22.495"/>
                            <circle cx="114.637" cy="230.924" fill="#2a4a97" r="22.495"/>
                            <path d="m224.829 198.771h-137.577l-26.846-146.458c-.698-3.806-4.014-6.569-7.883-6.569h-40.071c-4.426 0-8.014 3.588-8.014 8.014s3.588 8.014 8.014 8.014h33.392l26.846 146.458c.698 3.806 4.014 6.569 7.883 6.569h18.398c4.051-3.937 9.571-6.37 15.666-6.37s11.615 2.434 15.666 6.37h40.979c4.051-3.937 9.571-6.37 15.666-6.37s11.615 2.434 15.666 6.37h22.216c4.426 0 8.014-3.588 8.014-8.014-.001-4.426-3.589-8.014-8.015-8.014z" fill="#c5e3ff"/>
                            <circle cx="186.947" cy="230.924" fill="#c5e3ff" r="9.119"/>
                            <circle cx="114.637" cy="230.924" fill="#c5e3ff" r="9.119"/>
                            <g fill="#f9677f">
                                <path d="m107.48 131.069h-.542c-3.945 0-7.173 3.228-7.173 7.173v32.443c0 3.945 3.228 7.173 7.173 7.173h.542c3.945 0 7.173-3.228 7.173-7.173v-32.443c0-3.945-3.228-7.173-7.173-7.173z"/>
                                <path d="m139.027 131.069h-.542c-3.945 0-7.173 3.228-7.173 7.173v32.443c0 3.945 3.228 7.173 7.173 7.173h.542c3.945 0 7.173-3.228 7.173-7.173v-32.443c0-3.945-3.228-7.173-7.173-7.173z"/>
                                <path d="m170.574 131.069h-.542c-3.945 0-7.173 3.228-7.173 7.173v32.443c0 3.945 3.228 7.173 7.173 7.173h.542c3.945 0 7.173-3.228 7.173-7.173v-32.443c0-3.945-3.227-7.173-7.173-7.173z"/>
                                <path d="m202.122 131.069h-.542c-3.945 0-7.173 3.228-7.173 7.173v32.443c0 3.945 3.228 7.173 7.173 7.173h.542c3.945 0 7.173-3.228 7.173-7.173v-32.443c0-3.945-3.228-7.173-7.173-7.173z"/>
                            </g>
                            <path d="m154.562 2.581c-4.406 0-7.978 3.572-7.978 7.978v28.721c0 4.406 3.572 7.978 7.978 7.978s7.978-3.572 7.978-7.978v-28.721c0-4.406-3.572-7.978-7.978-7.978z" fill="#facb35"/>
                            <path d="m218.758 32.335c-3.116-3.116-8.167-3.116-11.283 0l-20.309 20.309c-3.116 3.116-3.116 8.167 0 11.283s8.167 3.116 11.283 0l20.309-20.309c3.115-3.116 3.115-8.167 0-11.283z" fill="#facb35"/>
                            <path d="m101.65 32.335c-3.116-3.116-8.167-3.116-11.283 0s-3.116 8.167 0 11.283l20.309 20.309c3.116 3.116 8.167 3.116 11.283 0s3.116-8.167 0-11.283z" fill="#facb35"/>
                            <path d="m222.989 201.271h-135.737c-1.207 0-2.241-.862-2.459-2.049l-15.808-86.243c-.134-.729.063-1.481.539-2.051s1.179-.899 1.92-.899h169.916c.052-.003.152-.009.168-.009.772-.017 1.509.305 2.003.896s.688 1.377.525 2.131l-18.625 86.253c-.246 1.15-1.264 1.971-2.442 1.971zm-133.654-5h131.636l17.542-81.243h-164.069z"/>
                            <path d="m241.4 115.029h-169.956c-1.207 0-2.241-.862-2.459-2.049l-3.339-18.215c-.134-.729.063-1.481.539-2.051s1.179-.899 1.92-.899h173.295c4.845 0 8.787 3.942 8.787 8.787v5.641c0 4.844-3.942 8.786-8.787 8.786zm-167.873-5h167.873c2.088 0 3.787-1.699 3.787-3.787v-5.641c0-2.088-1.699-3.787-3.787-3.787h-170.295z"/>
                            <path d="m186.947 255.918c-13.782 0-24.994-11.212-24.994-24.995 0-13.782 11.212-24.994 24.994-24.994s24.995 11.212 24.995 24.994c0 13.783-11.213 24.995-24.995 24.995zm0-44.988c-11.025 0-19.994 8.969-19.994 19.994s8.969 19.995 19.994 19.995 19.995-8.97 19.995-19.995-8.97-19.994-19.995-19.994z"/>
                            <path d="m114.637 255.918c-13.782 0-24.995-11.212-24.995-24.995 0-13.782 11.212-24.994 24.995-24.994s24.995 11.212 24.995 24.994c-.001 13.783-11.213 24.995-24.995 24.995zm0-44.988c-11.025 0-19.995 8.969-19.995 19.994s8.97 19.995 19.995 19.995 19.995-8.97 19.995-19.995-8.97-19.994-19.995-19.994z"/>
                            <path d="m224.829 217.3h-22.216c-.65 0-1.275-.253-1.742-.707-3.758-3.652-8.703-5.663-13.924-5.663s-10.166 2.011-13.923 5.663c-.466.453-1.091.707-1.742.707h-40.979c-.65 0-1.275-.253-1.742-.707-3.758-3.652-8.703-5.663-13.924-5.663s-10.166 2.011-13.923 5.663c-.466.453-1.091.707-1.742.707h-18.399c-5.077 0-9.426-3.625-10.342-8.619l-26.47-144.409h-31.309c-5.798 0-10.515-4.717-10.515-10.514s4.717-10.514 10.515-10.514h40.071c5.077 0 9.426 3.625 10.342 8.618l26.47 144.41h135.494c5.797 0 10.514 4.717 10.514 10.514s-4.717 10.514-10.514 10.514zm-21.231-5h21.231c3.041 0 5.514-2.474 5.514-5.514s-2.474-5.514-5.514-5.514h-137.577c-1.207 0-2.241-.862-2.459-2.049l-26.846-146.459c-.48-2.619-2.762-4.52-5.424-4.52h-40.071c-3.041 0-5.515 2.474-5.515 5.514s2.474 5.514 5.515 5.514h33.392c1.207 0 2.241.862 2.459 2.049l26.846 146.459c.48 2.619 2.761 4.52 5.424 4.52h17.414c4.594-4.116 10.466-6.37 16.65-6.37s12.056 2.254 16.65 6.37h39.01c4.594-4.116 10.466-6.37 16.65-6.37s12.056 2.254 16.651 6.37z"/>
                            <path d="m154.562 49.758c-5.778 0-10.478-4.7-10.478-10.478v-28.72c0-5.778 4.7-10.478 10.478-10.478 5.777 0 10.478 4.7 10.478 10.478v28.72c0 5.778-4.7 10.478-10.478 10.478zm0-44.676c-3.02 0-5.478 2.458-5.478 5.478v28.72c0 3.021 2.458 5.478 5.478 5.478 3.021 0 5.478-2.457 5.478-5.478v-28.72c0-3.021-2.457-5.478-5.478-5.478z"/>
                            <path d="m192.808 68.758c-2.683 0-5.366-1.021-7.409-3.063-4.085-4.086-4.085-10.733 0-14.818l20.309-20.309c1.979-1.979 4.61-3.069 7.409-3.069s5.43 1.09 7.409 3.069c4.085 4.085 4.085 10.732 0 14.818l-20.309 20.309c-2.043 2.041-4.726 3.063-7.409 3.063zm20.308-36.26c-1.463 0-2.839.57-3.873 1.604l-20.309 20.309c-2.136 2.136-2.136 5.611 0 7.748 2.137 2.135 5.611 2.135 7.747 0l20.309-20.309c2.136-2.136 2.136-5.611 0-7.748-1.035-1.034-2.41-1.604-3.874-1.604z"/>
                            <path d="m116.317 68.758c-2.683 0-5.366-1.021-7.409-3.063l-20.308-20.31c-4.085-4.085-4.085-10.732 0-14.818 1.979-1.979 4.61-3.069 7.409-3.069s5.43 1.09 7.409 3.069l20.309 20.309c4.085 4.085 4.085 10.732 0 14.818-2.044 2.042-4.727 3.064-7.41 3.064zm-20.309-36.26c-1.463 0-2.839.57-3.874 1.604-2.136 2.136-2.136 5.611 0 7.748l20.309 20.309c2.137 2.135 5.611 2.135 7.747 0 2.136-2.136 2.136-5.611 0-7.748l-20.308-20.308c-1.035-1.035-2.41-1.605-3.874-1.605z"/>
                            <path d="m251.562 105.922h-181.788c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h181.788c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"/>
                            <path d="m186.947 242.543c-6.407 0-11.619-5.212-11.619-11.62 0-6.407 5.212-11.619 11.619-11.619s11.62 5.212 11.62 11.619c0 6.408-5.213 11.62-11.62 11.62zm0-18.238c-3.65 0-6.619 2.969-6.619 6.619s2.969 6.62 6.619 6.62 6.62-2.97 6.62-6.62-2.97-6.619-6.62-6.619z"/>
                            <path d="m114.637 242.543c-6.407 0-11.619-5.212-11.619-11.62 0-6.407 5.212-11.619 11.619-11.619s11.62 5.212 11.62 11.619c-.001 6.408-5.213 11.62-11.62 11.62zm0-18.238c-3.65 0-6.619 2.969-6.619 6.619s2.969 6.62 6.619 6.62 6.62-2.97 6.62-6.62-2.97-6.619-6.62-6.619z"/>
                            <path d="m107.48 180.358h-.542c-5.333 0-9.673-4.339-9.673-9.673v-32.443c0-5.333 4.339-9.673 9.673-9.673h.542c5.333 0 9.673 4.339 9.673 9.673v32.443c0 5.334-4.34 9.673-9.673 9.673zm-.542-46.789c-2.577 0-4.673 2.096-4.673 4.673v32.443c0 2.577 2.096 4.673 4.673 4.673h.542c2.577 0 4.673-2.096 4.673-4.673v-32.443c0-2.577-2.096-4.673-4.673-4.673z"/>
                            <path d="m139.027 180.358h-.542c-5.333 0-9.673-4.339-9.673-9.673v-32.443c0-5.333 4.339-9.673 9.673-9.673h.542c5.334 0 9.673 4.339 9.673 9.673v32.443c0 5.334-4.339 9.673-9.673 9.673zm-.542-46.789c-2.577 0-4.673 2.096-4.673 4.673v32.443c0 2.577 2.096 4.673 4.673 4.673h.542c2.577 0 4.673-2.096 4.673-4.673v-32.443c0-2.577-2.097-4.673-4.673-4.673z"/>
                            <path d="m170.574 180.358h-.542c-5.333 0-9.673-4.339-9.673-9.673v-32.443c0-5.333 4.339-9.673 9.673-9.673h.542c5.334 0 9.673 4.339 9.673 9.673v32.443c.001 5.334-4.339 9.673-9.673 9.673zm-.541-46.789c-2.577 0-4.673 2.096-4.673 4.673v32.443c0 2.577 2.096 4.673 4.673 4.673h.542c2.577 0 4.673-2.096 4.673-4.673v-32.443c0-2.577-2.097-4.673-4.673-4.673z"/>
                            <path d="m202.122 180.358h-.542c-5.333 0-9.673-4.339-9.673-9.673v-32.443c0-5.333 4.339-9.673 9.673-9.673h.542c5.333 0 9.673 4.339 9.673 9.673v32.443c-.001 5.334-4.34 9.673-9.673 9.673zm-.542-46.789c-2.577 0-4.673 2.096-4.673 4.673v32.443c0 2.577 2.096 4.673 4.673 4.673h.542c2.577 0 4.673-2.096 4.673-4.673v-32.443c0-2.577-2.096-4.673-4.673-4.673z"/>
                        </svg>
                        <Typography className='title'>Your cart is empty</Typography>
                    </div>
                }
            </DialogContent>
        </Dialog>
    )
}

export default Cart