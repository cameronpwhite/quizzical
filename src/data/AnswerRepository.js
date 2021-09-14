import { fetchIt } from './Fetch'
import Settings from './Settings'

export default {
    get(id) {
        return fetchIt(`${Settings.remoteURL}/answers/${id}`)
    },
    getAllAnswers() {
        return (fetchIt(`${Settings.remoteURL}/answers`))
    }
}