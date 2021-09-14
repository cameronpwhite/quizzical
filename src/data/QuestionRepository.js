import { fetchIt } from './Fetch'
import Settings from './Settings'

export default {
    get(id) {
        return fetchIt(`${Settings.remoteURL}/questions/${id}`)
    },
    getAllQuestions() {
        return (fetchIt(`${Settings.remoteURL}/questions`))
    }
}