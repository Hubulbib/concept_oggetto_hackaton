import $api from '../http/index'

export default class AuthService {
    static async login(username, password) {
        return $api.post('/auth/login', { username, password })
    }
}