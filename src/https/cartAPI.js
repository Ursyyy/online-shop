import axiosInstance from './axiosInstance'

const addToCart = async item => {
    const resp = await axiosInstance.post('/api/basket/', {
        productId: item.id,
        quantity: item.quantity
    })
    return resp
}

const createCart = async items => {
    await axiosInstance.post('/api/basket/', items)

}

const removeItem = async item => {
    const resp = await axiosInstance.post()
}

export {addToCart, createCart}