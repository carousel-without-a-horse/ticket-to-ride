import axios from 'axios'

import { REDIRECT_URI } from '../constants/apiConsts'

const API_ROOT = `${REDIRECT_URI}/api`

export const httpService = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
