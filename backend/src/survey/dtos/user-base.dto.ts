export class UserBaseDto {
    _id: string
    survey: {
        name: string,
        surname: string,
        age: number,
        city: string,
        department: string,
        job: string,
        maritalStatus: string,
        alcohol: string,
        smoking: string,
        sport: string,
        fact: string,
        _id: string
    } = {_id: '', name: '', surname: '', age: 0, city: '', department: '',
        job: '', alcohol: '', sport: '', smoking: '', maritalStatus: '', fact: ''}

    constructor(user) {
        this._id = user._id
        this.survey.name = user.survey.name
        this.survey.surname = user.survey.surname
        this.survey.age = user.survey.age
        this.survey.city = user.survey.city
        this.survey.department = user.survey.department
        this.survey.job = user.survey.job
        this.survey.maritalStatus = user.survey.maritalStatus
        this.survey.alcohol = user.survey.alcohol
        this.survey.smoking = user.survey.smoking
        this.survey.sport = user.survey.sport
        this.survey.fact = user.survey.fact
        this.survey._id = user.survey._id
    }
}