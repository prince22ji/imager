import axios from 'axios'
const instance=axios.create({
    baseURL:"https://api.unsplash.com/photos/",
})

export default instance