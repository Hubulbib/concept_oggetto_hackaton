import { makeAutoObservable } from 'mobx'
import ActivityService from '../services/ActivityService'

export default class ActivityStore {

    cards = {}
    facts = {}

    constructor() {
        makeAutoObservable(this)
    }

    setCards = (cards) => {
        this.cards = cards
    }

    setFacts = (facts) => {
        this.facts = facts
    }

    getActivity = async() => {
        try {
            const response = await ActivityService.getActivity()

            this.setCards(response.data.cards)
            this.setFacts(response.data.facts)
        } catch (err) {
            throw err
        }
    }
}