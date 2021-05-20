import React, {useState, useEffect} from 'react'

const ProductPage = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        console.log(window.location.pathname)
    }, [])

    return (
        <>Hello</>
    )
}


export default ProductPage