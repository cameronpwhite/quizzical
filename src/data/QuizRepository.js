import { fetchIt } from './Fetch'
import Settings from './Settings'

export default {
    get(id) {
        return fetchIt(`${Settings.remoteURL}/quizzes/${id}`)
    },
    getAllQuizzes() {
        return (fetchIt(`${Settings.remoteURL}/quizzes`))
    }
}