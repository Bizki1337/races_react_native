import {createSelector} from 'reselect'
import {RootState} from '../../../core/store/configureStore'

export const getDriversIsLoading = (state: RootState) => state.drivers.isLoading
export const getDriversColletion = (state: RootState) => state.drivers.collection
export const getDriversOffset = (state: RootState) => state.drivers.collection
export const getDriversTotal = (state: RootState) => state.drivers.total
export const getPageCount = (state: RootState) => state.drivers.pageCount

export const getDriverTitle = createSelector(
	[getDriversColletion],
	(data) => data[0]?.driverId
)