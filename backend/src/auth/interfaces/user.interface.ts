export interface Iuser {
    username: string
    password: string
    survey: {
        name: string
        surname: string
        country: string
        city: string
        department: string
        job: string
        maritalStatus: string
        alcohol: string
        smoking: string
        sport: string
        interests: string[]
    }
}