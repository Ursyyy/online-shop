import axiosInstance from './axiosInstance'

const getAllProducts = async () => {
    const resp = await axiosInstance.get('/api/product')
    return resp.data
}

const getProdyctsById = async id => {
    const resp = await axiosInstance.get(`/api/product?typeid=${id}`)
    return resp.data
}

export {getAllProducts, getProdyctsById}