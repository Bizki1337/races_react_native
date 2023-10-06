import {connect} from 'react-redux'

import {RootState} from '../../core/store/configureStore'

import * as selectors from '../../library/common/selectors/driverRacersSelectors'
import * as actions from '../../library/common/actions/driverRacesActions'

import Races from './Races'

const mapStateToProps = (store: RootState) => ({
	isLoading: selectors.getDriverRacesIsLoading(store),
	collection: selectors.getDriverRacesColletion(store),
	total: selectors.getDriverRacesTotal(store),
	offset: selectors.getDriverRacesOffset(store),
	pageCount: selectors.getPageCount(store),
})

const mapDispatchToProps = {
	getRaces: actions.driverRaces.request,
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(Races)