import { fetchIt } from './Fetch'
import Settings from './Settings'

export default {
    get(id) {
        return fetchIt(`${Settings.remoteURL}/users/${id}`)
    },
    getAllUsers() {
        return fetchIt(`${Settings.remoteURL}/users`)
    }
}