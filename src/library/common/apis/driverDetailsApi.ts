import {fetch} from '../../utils/fetch'

export const loadDriverDetailsRequest = (driverID: string) => 
	fetch.get(`/drivers/${driverID}.json`)
