
import {fetch} from '../../utils/fetch'

import { DEFAULT_LIMIT } from '../../constants'

interface IReq {
    driverID: string,
    offset: number
}

export const loadDriverRacesRequest = (driverID: string, offset: number) => 
	fetch.get(`/drivers/${driverID}/races.json?limit=${DEFAULT_LIMIT}&offset=${offset}`)
