import {connect} from 'react-redux'

import {RootState} from '../../core/store/configureStore'

import * as selectors from '../../library/common/selectors/driversSelectors'
import * as actions from '../../library/common/actions/driversActions'

import Home from './Home'

const mapStateToProps = (store: RootState) => ({
	isLoading: selectors.getDriversIsLoading(store),
	collection: selectors.getDriversColletion(store),
	total: selectors.getDriversTotal(store),
	offset: selectors.getDriversOffset(store),
	pageCount: selectors.getPageCount(store),
})

const mapDispatchToProps = {
	getDrivers: actions.drivers.request,
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(Home)