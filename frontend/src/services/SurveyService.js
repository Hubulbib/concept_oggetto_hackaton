import $api from '../http/index'

export default class SurveyService {
    static async getForm() {
        return $api.get('/survey/get')
    }
    static async getStatus() {
        return $api.get('/survey/status')
    }
    static async getBase() {
        return $api.get('/survey/base')
    }
    static async createForm(data) {
        return $api.post('/survey/create', {data})
    }
}