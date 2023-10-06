import {all, fork} from 'redux-saga/effects'

import driversSaga from '../library/common/sagas/driversSaga'
import driverDetailsSaga from '../library/common/sagas/driverDetailsSaga'
import driverRacesSags from '../library/common/sagas/driverRacesSags'

export default function* coreSaga() {
	yield all([
		fork(driversSaga),
		fork(driverDetailsSaga),
		fork(driverRacesSags),
	])
}
