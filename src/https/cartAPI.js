import axiosInstance from './axiosInstance'

const getCart = async _ => {
    let cart;
    try {
        const resp = await axiosInstance.get('/api/basket/')
        cart = resp.data
    } catch (e) {
        cart = {products: []}
    } finally {
        return cart
    }
    
}

const addToCart = async item => {
    try {
        await axiosInstance.put('/api/basket/', item)
    } catch (e) {
        console.log(e)
    }
}

const createCart = async items => {
    try {
        await axiosInstance.post('/api/basket/', items)
    } catch (e) {
        console.log(e)
    }
    
}

const removeItem = async item => {
    try {
        await axiosInstance.post('/api/basket/del', item)
    } catch (e) {
        console.log(e)
    }
}

export {addToCart, createCart, getCart, removeItem}