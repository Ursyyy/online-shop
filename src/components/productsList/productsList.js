import React, {useState, useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import useClasses from './classes';
import FiltersBlock from '../filters/filters'
import { Typography } from '@material-ui/core';
import { getAllProducts, getProdyctsById } from '../../https/productsAPI';
import { StateContext } from '../../storage/context';
import { SET_CART } from '../../storage/types';
import { isUserLogined } from '../../utils/isUserLogined';
import { addToCart } from '../../https/cartAPI'
import { getImage } from '../../utils/convertData'
import { EMPTY_LIST } from '../../svg/forProducts'


const ProductsList = () => {
    const classes = useClasses();
    const [products, setProducts] = useState([]);
    const [state, dispatch] = useContext(StateContext)

    useEffect(async () => {
        const location = window.location.pathname.replace('/','')
        let data = []
        if(location === ''){
            data = await getAllProducts();
        } else {
            data = await getProdyctsById(location)
        }
        setProducts(data)
    },[window.location.pathname.replace('/','')])

    const addItem = async item => {
        let products;
        if(isUserLogined(state.user)){
            products = JSON.parse(localStorage.getItem('products')) || []
        } else {
            products = state.cart
        }
        if(!products.some(product => {
            if(product.id === item.id){
                // product.quantity++
                return true
            }
            return false
        })) {
            products.push({
                quantity: 1,
                name: item.name,
                price: item.price,
                id: item.id,
                img: item.img
            })
        }
        if(isUserLogined(state.user)) {
            localStorage.setItem('products', JSON.stringify(products))
        } else {
            await addToCart({
                productId: item.id,
                quantity: 1
            })
        }
        dispatch({
            type: SET_CART,
            payload: products
        })
    }

    return (
        <Grid container className={classes.root}>
            <FiltersBlock />
            {
                products.length > 0 ?
                    <Grid item xs={9}>
                    <Grid container >
                        {products.map(item => (
                            <Paper className={classes.paper} key={item.id}>
                                <img src={getImage(item.img)}/>
                                <Typography className='title'>{item.name}</Typography>
                                <div className="controll">
                                    <Typography className='price'>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</Typography>
                                    <svg className='add-to-cart' x="0px" y="0px"
                                        onClick={() => addItem(item)}
                                        viewBox="0 0 512 512" space="preserve">
                                        <path fill="#d6c3b4" d="M394.667,256C318.122,255.906,256.094,193.878,256,117.333c0-3.605,0.277-7.125,0.533-10.667H96
                                            c-5.891,0.005-10.662,4.785-10.657,10.677c0.001,0.655,0.062,1.309,0.182,1.953l32,170.667c0.944,5.043,5.344,8.699,10.475,8.704
                                            h292.992c26.9,0.003,49.592-20.027,52.928-46.72l2.901-23.168C453.072,246.443,424.265,255.988,394.667,256z"/>
                                        <g>
                                            <circle fill="#455A64" cx="394.667" cy="458.667" r="53.333"/>
                                            <circle fill="#455A64" cx="181.333" cy="458.667" r="53.333"/>
                                            <path fill="#455A64" d="M437.333,384H191.125c-35.561-0.074-66.163-25.156-73.216-60.011L65.92,64H10.667
                                                C4.776,64,0,59.224,0,53.333s4.776-10.667,10.667-10.667h64c5.07-0.001,9.439,3.566,10.453,8.533l53.717,268.587
                                                c5.035,24.896,26.888,42.817,52.288,42.88h246.208c5.891,0,10.667,4.776,10.667,10.667S443.224,384,437.333,384z"/>
                                        </g>
                                        {
                                            !state.cart.some(product => product.id === item.id) ? 
                                                <>
                                                    <circle fill="#3B8AC4" cx="394.667" cy="117.333" r="117.333"/>
                                                    <g> 
                                                        <path fill="#FAFAFA" d="M437.333,128H352c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h85.333
                                                            c5.891,0,10.667,4.776,10.667,10.667S443.224,128,437.333,128z"/>
                                                        <path fill="#FAFAFA" d="M394.667,170.667c-5.891,0-10.667-4.776-10.667-10.667V74.667C384,68.776,388.776,64,394.667,64
                                                            c5.891,0,10.667,4.776,10.667,10.667V160C405.333,165.891,400.558,170.667,394.667,170.667z"/>
                                                    </g>    
                                                </>
                                                :
                                                <>
                                                    <path stroke="null" id="svg_6" d="m392.40287,1.00074c65.9438,0 119.40213,53.45833 119.40213,119.40213s-53.45833,119.40213 -119.40213,119.40213s-119.40213,-53.45833 -119.40213,-119.40213l0,0c-0.18764,-65.75681 52.96618,-119.21449 118.72234,-119.40213c0.2266,-0.00065 0.45319,-0.00065 0.67979,0z" fill="#3BB54A"/>
                                                    <polygon stroke="null" id="svg_7" points="467.7799987792969,84.75325012207031 374.98846435546875,177.5447998046875 323.0249938964844,125.95289611816406 344.1817932128906,105.16766357421875 374.98846435546875,135.60345458984375 446.6239013671875,63.968017578125 " fill="#D4E1F4"/>
                                                </>
                                        }
                                    </svg>
                                </div>
                                {item.info.length ? <Typography className='descr'>{item.info.join('/')} </Typography> : <></>}
                            </Paper>
                        ))}
                    </Grid>
                </Grid>
                :
                <div className={classes.empty}>
                    {EMPTY_LIST}
                    <Typography className='caption'>No products</Typography>
                </div>
                
            }
        </Grid>
    );
}

export default ProductsList;