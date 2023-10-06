import {combineReducers} from 'redux'

import driversReducer from '../library/common/reducers/driversReducer'
import driverDetailReducer from '../library/common/reducers/driverDetail'
import driverRacesReducer from '../library/common/reducers/driverRaces'

const createCoreReducer = () => combineReducers({
	drivers: driversReducer,
	driverDetail: driverDetailReducer,
	driverRaces: driverRacesReducer,
})

export default createCoreReducer