import User from '../../auth/schemas/user.schema'

class SurveyService {
    async create(data, id: string) {
        const user = await User.findById(id)

        user.survey = {...data}

        await user.save()

        return 'Анкета успешно создана'
    }
}

export default new SurveyService()