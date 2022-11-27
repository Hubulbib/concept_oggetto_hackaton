import User from '../../auth/schemas/user.schema'
import {UserBaseDto} from "../dtos/user-base.dto";

class SurveyService {
    async create(data, id: string) {
        const user = await User.findById(id)

        user.survey = {...data}

        await user.save()

        return 'Анкета успешно создана'
    }

    async getForm(id: string) {
        const user = await User.findById(id)

        return user.survey
    }

    async getStatus(id: string) {
        const user = await User.findById(id)

        return user.survey.name.length > 0
    }

    async getBase(id: string) {
        const users = (await User.find({})).filter(el => el._id.toString() !== id)

        return (users.map(el => new UserBaseDto(el)))
    }
}

export default new SurveyService()