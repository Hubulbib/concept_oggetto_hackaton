import axios from 'axios'

export const BASE_URL = 'http://localhost:5000/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originRequest._isRetry = true
        try {
            const response = await axios.get(`${BASE_URL}/auth/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.token)
            return $api.request(originRequest)
        } catch (err) {
            console.log('No auth')
        }
    }
    throw error
})

export default $api