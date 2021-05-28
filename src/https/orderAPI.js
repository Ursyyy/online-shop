import axiosInstance from './axiosInstance'

export const createOrder = async _ => {
    const resp = await axiosInstance.post('/api/order/')
    console.log(resp.data)
}

