import {RootState} from '../../../core/store/configureStore'

export const getDriversIsLoading = (state: RootState) => state.driverDetail.isLoading
export const getDriversDetails = (state: RootState) => state.driverDetail.details