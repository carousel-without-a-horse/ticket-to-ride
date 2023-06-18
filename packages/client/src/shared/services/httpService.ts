import axios from 'axios'

export const httpService = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2',
})
