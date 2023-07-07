import axios from 'axios'

const REDIRECT_URI = 'http://localhost:3000'
const API_ROOT = `${REDIRECT_URI}/api`

export const httpService = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
