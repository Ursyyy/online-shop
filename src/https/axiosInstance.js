import axios from "axios"

const axiosInstance = axios.create({
  baseURL:  process.env.REACT_APP_API_URL + ':' + process.env.REACT_APP_PORT,
  timeout: 5000,
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json; charset=utf-8',
    "Access-Control-Allow-Origin": "*"
    }
})
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

axiosInstance.interceptors.request.use(authInterceptor)

export default axiosInstance