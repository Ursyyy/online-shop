import axiosInstance from './axiosInstance'

const registerUser = async (userData, role="USER") => {
    const resp = await axiosInstance.put('/api/user/registration', {
        ...userData,
        role
    })
    localStorage.setItem('token', resp.data.token)
    console.log(resp)
}


const loginUser = async (userData,) => {
    const resp = await axiosInstance.put('/api/login', {
        ...userData,
    })
    localStorage.setItem('token', resp.data.token)
}


export {registerUser}