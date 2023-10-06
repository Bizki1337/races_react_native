import {call, put, takeLatest} from 'redux-saga/effects'

import * as api from '../apis/driversApi'
import * as types from '../types/driversTypes'
import * as actions from '../actions/driversActions'

import { getOffset } from './utils/getOffset'

import { DEFAULT_LIMIT } from '../../constants'

function* requestDriversSaga(action: ReturnType<typeof actions.drivers.request>) {
	try {
		const {data: data} = yield call(api.loadDriverRequest, getOffset(action.payload))
		const { offset, total, DriverTable } = data?.MRData
		const pageCount = Math.ceil(total / DEFAULT_LIMIT)

		yield put(actions.drivers.success({
			offset: Number(offset),
			total: Number(total),
			collection: DriverTable.Drivers,
			pageCount,
		}))
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
		}
	}
}

export default function* drivers() {
	yield takeLatest(types.drivers.REQUEST, requestDriversSaga)
}