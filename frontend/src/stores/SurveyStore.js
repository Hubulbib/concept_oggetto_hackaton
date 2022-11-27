import { makeAutoObservable } from 'mobx'
import SurveyService from '../services/SurveyService'

export default class SurveyStore {

    form = {}
    base = {}
    createdForm = {}

    constructor() {
        makeAutoObservable(this)
    }

    setForm = (form) => {
        this.form = form
    }

    setBase = (base) => {
        this.base = base
    }

    setCreatedForm = (data) => {
        this.createdForm = data
    }

    getForm = async () => {
        try {
            const response = await SurveyService.getForm()
            this.setForm(response.data.survey)
        } catch (err) {
            throw err
        }
    }

    getBase = async () => {
        try {
            const response = await SurveyService.getBase()
            this.setBase(response.data.base)
        } catch (err) {
            throw err
        }
    }

    createForm = async () => {
        try {
            await SurveyService.createForm(this.createdForm)
        } catch (err) {
            throw err
        }
    }
}