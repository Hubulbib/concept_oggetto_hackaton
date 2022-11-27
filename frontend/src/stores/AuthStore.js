import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { BASE_URL } from '../http'
import AuthService from '../services/AuthService'
import SurveyService from '../services/SurveyService'

export default class AuthStore {
    user = {}
    isSurveyExists = false
    isAuth = false
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth = (bool) => {
        this.isAuth = bool
    }

    setUser = (user) => {
        this.user = user
    }

    setLoading = (bool) => {
        this.isLoading = bool
    }

    setSurveyExists = (bool) => {
        this.setSurveyExists = bool
    }

    login = async(username, password) => {
        this.setLoading(true)
        try {
            const response = await AuthService.login(username, password)
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (err) {
            throw err
        } finally {
            this.setLoading(false)
        }
    }

    checkAuth = async() => {
        this.setLoading(true)
        try {
            const response = await axios.get(`${BASE_URL}/auth/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
            this.setUser(response.data.user)
            const responseStatus = await SurveyService.getStatus()
            this.setSurveyExists(responseStatus.data.status)
        } catch (err) {
            throw err
        } finally {
            this.setLoading(false)
        }
    }
}