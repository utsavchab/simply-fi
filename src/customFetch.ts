import axios from 'axios'
const customFetch = axios.create({
  baseURL: 'https://simply-fi-server.onrender.com/api',
})

export default customFetch
