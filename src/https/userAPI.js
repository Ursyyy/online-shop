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
    console.log(resp)
    if(resp.data.message){
        throw resp.data
    }
    localStorage.setItem('token', resp.data.token)
    console.log('145')
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
        return {user: {}, cart: {
            id: -1,
            basket_products: JSON.parse(localStorage.getItem('products')) || []
        },}
    }
    localStorage.setItem('token', resp.data.token)
    return {
        user: resp.data.user, 
        cart: resp.data.basket
    }
}


export {registerUser, loginUser, getUser}