import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_ROOT_API_ENDPOINT,
})

export default instance
