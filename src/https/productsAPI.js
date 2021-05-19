import axiosInstance from './axiosInstance'

const getAllProducts = async () => {
    const resp = await axiosInstance.get('/api/product')
    return resp.data
}

const getProdyctById = async id => {
    const resp = await axiosInstance.get(`/api/product/${id}`)
    return resp.data
}

export {getAllProducts, getProdyctById}