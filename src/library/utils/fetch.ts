import axios from 'axios'

export const fetch = axios.create({
	baseURL: 'https://ergast.com/api/f1',
})
