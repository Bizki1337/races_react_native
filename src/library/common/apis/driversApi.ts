import {fetch} from '../../utils/fetch'

import { DEFAULT_LIMIT } from '../../constants'

export const loadDriverRequest = (offset: number) => 
	fetch.get(`/drivers.json?limit=${DEFAULT_LIMIT}&offset=${offset}`)
