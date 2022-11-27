import User from '../../auth/schemas/user.schema'
import {UserCardDto} from '../dtos/user-card.dto'

class ActivityService {
    async getCards(id) {
        const cards = []
        const facts = ['', '', '']
        const users = await User.find({})
        while(cards.length < 3) {
            const random = Math.floor(Math.random() * (users.length))
            const user = users[random]
            if (user._id != id) {
                let flag = 0
                for(let i of cards){
                    if (i._id === user._id) {
                        flag = 1
                        break
                    }
                }
                if (flag) continue
                cards.push(new UserCardDto(user))
            }
        }

        while (!facts[0] || !facts[1] || !facts[2]) {
            const random = Math.floor(Math.random() * 3)
            if (!facts[random]) facts[random] = cards[random].fact
        }

        return {cards, facts}
    }
}

export default new ActivityService()