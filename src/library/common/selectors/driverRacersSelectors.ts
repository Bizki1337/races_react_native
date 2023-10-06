import {RootState} from '../../../core/store/configureStore'

export const getDriverRacesIsLoading = (state: RootState) => state.driverRaces.isLoading
export const getDriverRacesColletion = (state: RootState) => state.driverRaces.collection
export const getDriverRacesOffset = (state: RootState) => state.driverRaces.collection
export const getDriverRacesTotal = (state: RootState) => state.driverRaces.total
export const getPageCount = (state: RootState) => state.driverRaces.pageCount