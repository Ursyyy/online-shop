import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import useClasses from './classes'
import img from '../../images/170347280.jpg'
import { Typography } from '@material-ui/core';
const MainPage = () => {
    const classes = useClasses()
    const items = {
        id: 1,
        img,
        title: 'Ноутбук HP Pavilion 14-dv0002ua',
        descr: 'Экран 14" IPS (1920x1080) Full HD, матовый / Intel Core i5-1135G7 (4.2 ГГц) / RAM 16 ГБ / SSD 512 ГБ / Intel Iris Xe Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / DOS / 1.41 кг / белый с серебристым',
        price: 22499,
    }
    return (
        <Grid container className={classes.root}>
            <Grid item xs={9}>
                <Grid container justify="center">
                    {[1,2,3,4, 5, 6, 7, 8].map(key => (
                        // <Grid key={key} item >
                            <Paper className={classes.paper}>
                                <img src={items.img}/>
                                <Typography className='title'>{items.title}</Typography>
                                <Typography className='price'>{items.price}</Typography>
                                <Typography className='descr'>{items.descr}</Typography>

                            </Paper>
                        // </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainPage