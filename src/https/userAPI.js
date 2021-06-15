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
}


const loginUser = async (userData) => {
    const resp = await axiosInstance.post('/api/user/login', {
        ...userData,
    })
    if(resp.data.message){
        throw resp.data
    }
    localStorage.setItem('token', resp.data.token)
    return {
        id: resp.data.id,
        email: resp.data.email,
        role: resp.data.role,
        firstName: resp.data.firstName,
        lastName: resp.data.lastName,
        phone: resp.data.phone
    }
}

const getUser = async _ => {
    const resp = await axiosInstance.get('/api/user')
    if(resp.data.message) {
        return {
            user: {}, 
            cart: JSON.parse(localStorage.getItem('products')) || []
        }
    }
    localStorage.setItem('token', resp.data.token)
    return {
        user: {
            id: resp.data.userInfo.id,
            email: resp.data.userInfo.email,
            role: resp.data.userInfo.role,
            firstName: resp.data.userInfo.firstName,
            lastName: resp.data.userInfo.lastName,
            phone: resp.data.userInfo.phone
        }, 
        cart: resp.data.products
    }
}

const fogotPassword = async _ => {
    const resp = await axiosInstance.post('/api/user/forgot-password/')
    if(resp.message){
        throw "User with this email was not found"
    } 
}

const resetPassword = async email => {
    const resp = axiosInstance.post('/api/user/reset-password/')
    if(resp.message){
        throw "Token timed out"
    }
    localStorage.setItem('token', resp.data.token)

}


export {registerUser, loginUser, getUser}