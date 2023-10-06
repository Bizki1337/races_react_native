import {call, put, takeLatest} from 'redux-saga/effects'

import * as api from '../apis/driverDetailsApi'
import * as types from '../types/driverDetailsTypes'
import * as actions from '../actions/driverDetailsActions'

function* requestDriverDetailSaga(action: ReturnType<typeof actions.driverDetail.request>) {
	try {
		const {data: data} = yield call(api.loadDriverDetailsRequest, action.payload)
		const { Drivers } = data.MRData.DriverTable
		yield put(actions.driverDetail.success(Drivers[0]))
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
		}
	}
}

export default function* driverDetail() {
	yield takeLatest(types.driverDetails.REQUEST, requestDriverDetailSaga)
}