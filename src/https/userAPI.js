import axiosInstance from './axiosInstance'
const registerUser = async (userData, role="USER") => {
    const resp = await axiosInstance.put('/api/user/registration', {
        ...userData,
        role
    })
    if(resp.data.message){
        throw resp.data
    }
    localStorage.setItem('token', resp.data.token)
    console.log(resp)
}


const loginUser = async (userData) => {
    const resp = await axiosInstance.post('/api/user/login', {
        ...userData,
    })
    if(resp.data.message){
        throw resp.data
    }
    console.log(resp)
    localStorage.setItem('token', resp.data.token)
}


export {registerUser, loginUser}