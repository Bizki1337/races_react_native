import {createAsyncAction} from 'typesafe-actions'

import * as types from '../types/driversTypes'

import * as interfaces from '../interfaces/driversInterfaces'

export const drivers = createAsyncAction(
	types.drivers.REQUEST,
	types.drivers.SUCCESS,
	types.drivers.FAILURE,
)<number, interfaces.IDriversCollectionSuccess, string>()