import $api from '../http/index'

export default class ActivityService {
    static async getActivity() {
        return $api.get('/activity')
    }
}