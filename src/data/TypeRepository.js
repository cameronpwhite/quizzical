import { fetchIt } from './Fetch'
import Settings from './Settings'

export default {
    get(id) {
        return fetchIt(`${Settings.remoteURL}/questionTypes/${id}`)
    },
    getAllTypes() {
        return (fetchIt(`${Settings.remoteURL}/questionTypes`))
    }
}