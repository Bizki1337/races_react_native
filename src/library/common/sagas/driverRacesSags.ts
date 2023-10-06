import {call, put, takeLatest} from 'redux-saga/effects'

import * as api from '../apis/driverRaces'
import * as types from '../types/driverRacesTypes'
import * as actions from '../actions/driverRacesActions'

import { DEFAULT_LIMIT } from '../../constants'
import { getOffset } from './utils/getOffset'

function* requestDriverRacesSaga(action: ReturnType<typeof actions.driverRaces.request>) {
	try {
        const { driverID, page } = action.payload
		const {data: data} = yield call(api.loadDriverRacesRequest, driverID, getOffset(page))
        const { offset, total, RaceTable } = data?.MRData
		const pageCount = Math.ceil(total / DEFAULT_LIMIT)

        console.log('RaceTable', RaceTable.Races)

		yield put(actions.driverRaces.success({
			offset: Number(offset),
			total: Number(total),
			collection: RaceTable.Races,
			pageCount,
		}))
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
		}
	}
}

export default function* driverDetail() {
	yield takeLatest(types.driverRaces.REQUEST, requestDriverRacesSaga)
}