import axiosInstance from './axiosInstance'

export const getCatalog = async _ => {
    const resp = await axiosInstance.get('/api/catalog')
    return resp.data
}

export const getCategory = async catId => {
    const resp = await axiosInstance.get('/api/catalog/')
}