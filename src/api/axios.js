import axios from 'axios'

const commentAPI = axios.create({
  baseURL: 'http://localhost:3000'
})

export default commentAPI
