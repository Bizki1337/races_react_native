import {connect} from 'react-redux'

import {RootState} from '../../core/store/configureStore'

import * as selectors from '../../library/common/selectors/driverDetailSelectors'
import * as actions from '../../library/common/actions/driverDetailsActions'

import Driver from './Driver'

const mapStateToProps = (store: RootState) => ({
	isLoading: selectors.getDriversIsLoading(store),
    details: selectors.getDriversDetails(store)
})

const mapDispatchToProps = {
	getDriverDetails: actions.driverDetail.request,
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(Driver)