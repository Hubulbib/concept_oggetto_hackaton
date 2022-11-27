export class UserCardDto {
    _id: string
    name: string
    surname: string
    job: string
    age: number
    city: string
    fact: string

    constructor(user) {
        this._id = user._id
        this.name = user.survey.name
        this.surname = user.survey.surname
        this.job = user.survey.job
        this.age = user.survey.age
        this.city = user.survey.city
        this.fact = user.survey.fact
    }
}
