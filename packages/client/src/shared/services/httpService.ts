import axios from 'axios'

const API_ROOT = '/api'

export const httpService = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
