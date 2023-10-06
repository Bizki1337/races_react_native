import {createAsyncAction} from 'typesafe-actions'

import * as types from '../types/driverDetailsTypes'

import { IDriver } from '../interfaces/driversInterfaces'

export const driverDetail = createAsyncAction(
	types.driverDetails.REQUEST,
	types.driverDetails.SUCCESS,
	types.driverDetails.FAILURE,
)<string, IDriver, string>()