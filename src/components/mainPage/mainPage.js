import React from 'react'
import { Link } from 'react-router-dom'
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper'

import useClasses from './classes'
// import { Typography } from '@material-ui/core';
// import { getAllProducts } from '../../https/productsAPI';

const MainPage = () => {
    const classes = useClasses()

    return (
        <>
            <Link to="/product">Prod</Link>
        </>
    )
}

export default MainPage
