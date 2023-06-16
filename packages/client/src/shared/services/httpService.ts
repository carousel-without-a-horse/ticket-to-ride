import axios from 'axios'

export const httpService = axios.create({
  baseURL: `http://localhost:${__SERVER_PORT__}`,
})
