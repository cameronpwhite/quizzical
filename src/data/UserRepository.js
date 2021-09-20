import { fetchIt } from './Fetch'
import Settings from './Settings'

export default {
    get(id) {
        return fetchIt(`${Settings.remoteURL}/users/${id}`)
    },
    getAllUsers() {
        return fetchIt(`${Settings.remoteURL}/users`)
    },
    getCurrentUser() {
        const userObject = localStorage.getItem("quiz_token")
        Buffer.toString(userObject)
        console.log(userObject)
    }
}