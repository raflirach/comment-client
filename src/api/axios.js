import axios from 'axios'

const commentAPI = axios.create({
  baseURL: 'https://api-comment.herokuapp.com'
})

export default commentAPI
