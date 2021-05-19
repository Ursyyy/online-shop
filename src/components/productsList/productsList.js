import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import useClasses from './classes';
import { Typography } from '@material-ui/core';
import { getAllProducts } from '../../https/productsAPI';

const ProductsList = () => {
    const classes = useClasses();
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const data = await getAllProducts();
        console.log(data)
        setProducts(data);
    },[])
    return (
        <Grid container className={classes.root}>
            <Grid item xs={9}>
                <Grid container justify="center">
                    {products.map(item => (
                        <Paper className={classes.paper} key={item.id}>
                            <img src={`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/${item.img}`}/>
                            <Typography className='title'>{item.name}</Typography>
                            <Typography className='price'>{item.price}</Typography>
                            {item.info.length ? <Typography className='descr'>{item.info.join('/')}</Typography> : <></>}
                        </Paper>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProductsList;