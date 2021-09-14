import { fetchIt } from './Fetch'
import Settings from './Settings'

export default {
    get(id) {
        return fetchIt(`${Settings.remoteURL}/categories/${id}`)
    },
    getAllCategories() {
        return (fetchIt(`${Settings.remoteURL}/categories`))
    }
}