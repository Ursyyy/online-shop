import { Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'

const ProductPage = () => {
    const classes = {}
    const [product, setProduct] = useState({})
    const item =  {
        id: 1,
        name: "iPhone 8",
        price: 100000,
        rating: 0,
        img: "dcc775af-89ad-4c95-9c06-1cbffba7709a.jpg",
        typeId: 1, 
        brandId: 1, 
        info: [ 
            { "title": "вес", "description": "5 грамм",}, 
            { "title": "вес", "description": "100500",} ,
            { "title": "вес", "description": "100500",} ,
            { "title": "вес", "description": "100500",} 
        ] 
    }
    useEffect(() => {
        console.log(window.location.pathname)
    }, [])

    return (
        <div className={classes.container}>
            <Typography className={classes.title}>{item.name}</Typography>
        </div>
    )
}


export default ProductPage