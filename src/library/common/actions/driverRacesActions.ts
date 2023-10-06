import {createAsyncAction} from 'typesafe-actions'

import * as types from '../types/driverRacesTypes'

export const driverRaces = createAsyncAction(
	types.driverRaces.REQUEST,
	types.driverRaces.SUCCESS,
	types.driverRaces.FAILURE,
)<{ driverID: string, page: number }, any, string>()